// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAllOrders,
//   updateOrderStatus
// } from "../../Redux/Slices/adminOrderSlice";

// const OrderPage = () => {
//   const dispatch = useDispatch();
//   const { orders, loading, error } = useSelector((state) =>state.order);

//   useEffect(() => {
//     dispatch(fetchAllOrders());
//   }, [dispatch]);

//   const handleStatusChange = (orderId, newStatus) => {
//     dispatch(updateOrderStatus({ orderId, status: newStatus }));
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Order Management</h2>
//       {loading && <p>Loading orders...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Order ID</th>
//             <th className="border p-2">Customer</th>
//             <th className="border p-2">Total</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//     {orders.map((order) => (
//         <tr key={order._id} className="border">
//             <td className="border p-2">{order._id}</td>
//             <td className="border p-2">{order.user?.name || "Guest"}</td>
//             <td className="border p-2">₹{order.totalPrice}</td>
//             <td className="border p-2">{order.status}</td>
//             <td className="border p-2">
//                 <select
//                     onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                     defaultValue={order.status}
//                 >
//                     <option value="Pending">Pending</option>
//                     <option value="Processing">Processing</option>
//                     <option value="Shipped">Shipped</option>
//                     <option value="Delivered">Delivered</option>
//                 </select>
//             </td>
//         </tr>
//     ))}
// </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderPage;

// new code
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrders,
  updateOrderStatus,
} from "../../Redux/Slices/adminOrderSlice";

const OrderPage = () => {
  const dispatch = useDispatch();

  // Correctly map the Redux state
  const { orders, loading, error } = useSelector((state) => state.adminOrders);

  useEffect(() => {
    // Fetch all orders when the component mounts
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const handleStatusChange = (orderId, newStatus) => {
    // Dispatch the action to update the order status
    dispatch(updateOrderStatus({ id: orderId, status: newStatus }));
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Order Management</h2>

      {/* Display loading and error messages */}
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Orders table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the orders and display them */}
          {orders.map((order) => (
            <tr key={order._id} className="border">
              <td className="border p-2">{order._id}</td>
              <td className="border p-2">{order.user?.name || "Guest"}</td>
              <td className="border p-2">₹{order.totalPrice}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">
                <select
                  onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  defaultValue={order.status}
                  className="p-1 border rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
