import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Redux/Slices/cartSlice';
// const checkout ={
//     _id:"12123",
//     createdAt:new Date(),
//     checkoutItems:[
//         {
//             productId:"1",
//             name:"Jacket",
//             color:"black",
//             size:"M",
//             quantity:2,
//             price:1000,
//             images:"https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fHww"
//         },
//         {
//             productId:"2",
//             name:"Shoes",
//             color:"White",
//             size:"M",
//             quantity:2,
//             price:2000,
//             images:"https://images.unsplash.com/photo-1562183241-b937e95585b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHx8MHx8fDA%3D"
//         },
//     ],
//     shippingAddress:{
//         address:"123 fashion Street",
//         city:"Mumbai",
//         country:"India"
//     },
// };
const OrderConfirmationPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {checkout} =useSelector((state)=>state.checkout);

    // Clear the cart when the order is confirmed
    useEffect(()=>{
        if(checkout && checkout._id){
            dispatch(clearCart());
            localStorage.removeItem("cart");
        }else{
            navigate("/my-orders");
        }
    },[checkout,dispatch,navigate]);

    const calculateEstimatedDelivery=(createdAt)=>{
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() +10);// Add 10 days to the order Date
        return orderDate.toLocaleDateString().slice(0,10);
    }
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
        <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>Thanks You For Your Order!</h1>
      {
        checkout && (
            <div className='p-6 rounded border'>
                <div className='flex justify-between mb-20'>
                    {/* Order Id and Date */}
                    <div>
                        <h2 className='text-xl font-semibold'>Order ID:{checkout._id}</h2>
                        <p>Order Date:{new Date(checkout.createdAt).toLocaleDateString()}</p>
                    </div>

                    {/* Estimated Delivery */}
                    <div>
                        <p>Estimated Delivery:{""}
                        {calculateEstimatedDelivery(checkout.createdAt)}

                        </p>

                    </div>
                </div>
                {/* Ordered Items */}
                <div className='mb-20'>
                    {checkout.checkoutItems.map((item)=>(
                        <div key={item.productId}
                        className='flex items-center mb-4'
                        >
                            <img src={item.images} alt={item.name}
                            className='w-16 h-16 object-cover rounded-md mr-4'
                            />
                            <div>
                                <h4 className='text-md font-semibold'>{item.name}</h4>
                                <p className='text-sm text-gray-500'>{item.color} | {item.size}</p>
                            </div>

                            <div className='ml-auto text-right'>
                                <p className='text-md'>Rs.{item.price}</p>
                                <p className='text-sm text-gray-500'>Qty:{item.quantity}</p>
                            </div>

                        </div>
                    ))}

                </div>
                {/* Payment and Delivery Info */}
                <div className='grid grid-cols-2 gap-8'>
                    <div>
                        <h4 className='text-lg font-semibold mb-2'>Payment</h4>
                        <p className='text-gray-600'>PayPal</p>
                    </div>
                    {/* Delivery Info */}
                    <div>
                        <h4 className='text-lg font-semibold mb-2'>Delivery</h4>
                        <p>{checkout.shippingAddress.address}</p>
                        <p>{checkout.shippingAddress.city},{""}
                            {checkout.shippingAddress.country},{""}
                        </p>
                    </div>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default OrderConfirmationPage
