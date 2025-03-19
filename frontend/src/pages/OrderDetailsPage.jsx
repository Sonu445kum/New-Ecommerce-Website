import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchOrderDetails } from '../Redux/Slices/orderSlice';

const OrderDetailsPage = () => {
    const { id } = useParams();
   const dispatch = useDispatch();
   const {orderDetails,loading,error} = useSelector((state)=>state.order);

   // useEffect
   useEffect(()=>{
    dispatch(fetchOrderDetails(id));

   },[dispatch,id]);

   if(loading) return <p>Loading...</p>
   if(error) return <p>Error:{error}</p>

    
    return (
        <div className='max-w-7xl mx-auto p-6 sm:p-8'>
            <h2 className='text-3xl font-bold mb-6 text-gray-800'>Order Details</h2>
            {
                !orderDetails ? (
                    <p className='text-red-500'>No Order Details Found</p>
                ) : (
                    <div className='p-6 bg-white shadow-lg rounded-lg'>
                        {/* Order Info */}
                        <div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-700'>Order ID: {orderDetails._id}</h3>
                                <p className='text-gray-500'>{new Date(orderDetails.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className='flex flex-col items-center sm:items-end'>
                                <span className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isPaid ? "Approved" : "Pending"}</span>
                                <span className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-sm font-medium`}>{orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}</span>
                            </div>
                        </div>
                        {/* Payment & Shipping Info */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6'>
                            <div className='p-4 bg-gray-100 rounded-lg'>
                                <h4 className='text-lg font-semibold mb-2'>Payment Info</h4>
                                <p>Payment Method: <strong>{orderDetails.paymentMethod}</strong></p>
                                <p>Status: <strong>{orderDetails.isPaid ? "Paid" : "Unpaid"}</strong></p>
                            </div>
                            <div className='p-4 bg-gray-100 rounded-lg'>
                                <h4 className='text-lg font-semibold mb-2'>Shipping Info</h4>
                                <p>City: <strong>{orderDetails.shippingAddress.city}</strong></p>
                                <p>Country: <strong>{orderDetails.shippingAddress.country}</strong></p>
                            </div>
                        </div>
                        {/* Product List */}
                        <div className='overflow-x-auto'>
                            <h4 className='text-lg font-semibold mb-4'>Products</h4>
                            <table className='min-w-full text-gray-600 shadow-md rounded-lg'>
                                <thead className='bg-gray-200 text-gray-700'>
                                    <tr>
                                        <th className='py-2 px-4'>Product</th>
                                        <th className='py-2 px-4'>Unit Price</th>
                                        <th className='py-2 px-4'>Quantity</th>
                                        <th className='py-2 px-4'>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderDetails.orderItems.map((item) => (
                                        <tr key={item.productId} className='border-b hover:bg-gray-100 transition'>
                                            <td className='py-2 px-4 flex items-center'>
                                                <img src={item.image} alt={item.name} className='w-12 h-12 object-cover rounded-lg mr-4' />
                                                <Link to={`/product/${item.productId}`} className='text-blue-600 hover:underline'>
                                                    {item.name}
                                                </Link>
                                            </td>
                                            <td className='py-2 px-4'>Rs.{item.price}</td>
                                            <td className='py-2 px-4'>{item.quantity}</td>
                                            <td className='py-2 px-4 font-semibold'>Rs.{item.price * item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Back to Orders */}
                        <div className='mt-6'>
                            <Link to="/my-orders" className='text-blue-600 font-medium hover:underline'>
                                ← Back to Orders
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default OrderDetailsPage;