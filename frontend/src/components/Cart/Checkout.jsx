



// // new code
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PayPalButton from "./PayPalButton";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { createCheckout } from "../../Redux/Slices/checkoutSlice";

// const Checkout = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const { cart, loading, error } = useSelector((state) => state.cart);
//     const { user } = useSelector((state) => state.auth);

//     const [checkoutId, setCheckoutId] = useState(null);
//     const [shippingAddress, setShippingAddress] = useState({
//         firstName: "",
//         lastName: "",
//         address: "",
//         city: "",
//         state: "",
//         zipCode: "",
//         phone: "",
//         country: "",
//     });

//     useEffect(() => {
//         if (!cart || !cart.products || cart.products.length === 0) {
//             navigate("/");
//         }
//     }, [cart, navigate]);

//     const handleCreateCheckout = async (e) => {
//         e.preventDefault();
//         if (cart && cart.products.length > 0) {
//             try {
//                 const res = await dispatch(
//                     createCheckout({
//                         checkoutItems: cart.products,
//                         shippingAddress,
//                         paymentMethod: "PayPal",
//                         totalPrice: cart.totalPrice,
//                     })
//                 ).unwrap();
//                 if (res && res._id) {
//                     setCheckoutId(res._id);
//                 }
//             } catch (error) {
//                 console.error("Error creating checkout:", error);
//             }
//         }
//     };

//     const handlePaymentSuccess = async (details) => {
//         try {
//             const response = await axios.put(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
//                 { paymentStatus: "Paid", paymentDetails: details },
//                 {
//                     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//                 }
//             );
//             if (response.status === 200) {
//                 await handleFinalizeCheckout(checkoutId);
//             }
//         } catch (error) {
//             console.error("Payment update failed:", error);
//         }
//     };

//     const handleFinalizeCheckout = async (checkoutId) => {
//         try {
//             const response = await axios.post(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,
//                 {},
//                 {
//                     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//                 }
//             );
//             navigate("/order-confirmation");
//         } catch (error) {
//             console.error("Checkout finalization failed:", error);
//         }
//     };

//     if (loading) return <p>Loading cart...</p>;
//     if (error) return <p>Error: {error}</p>;
//     if (!cart || !cart.products || cart.products.length === 0) {
//         return <p>Your Cart is Empty!</p>;
//     }

//     return (
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//                 <h2 className="text-2xl font-bold uppercase mb-6">Checkout</h2>
//                 <form onSubmit={handleCreateCheckout}>
//                     <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-semibold">Email</label>
//                         <input type="email" value={user?.email || ""} className="w-full p-2 border rounded bg-gray-100" disabled />
//                     </div>
//                     <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
//                     <div className="grid grid-cols-2 gap-4">
//                         <input type="text" placeholder="First Name" value={shippingAddress.firstName} onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })} className="w-full p-2 border rounded" required />
//                         <input type="text" placeholder="Last Name" value={shippingAddress.lastName} onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })} className="w-full p-2 border rounded" required />
//                     </div>
//                     <input type="text" placeholder="Address" value={shippingAddress.address} onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })} className="w-full p-2 border rounded my-4" required />
//                     <div className="grid grid-cols-2 gap-4">
//                         <input type="text" placeholder="City" value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} className="w-full p-2 border rounded" required />
//                         <input type="text" placeholder="State" value={shippingAddress.state} onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })} className="w-full p-2 border rounded" required />
//                     </div>
//                     <div className="mt-6">
//                         {!checkoutId ? (
//                             <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Proceed to Payment</button>
//                         ) : (
//                             <div>
//                                 <h3 className="text-lg mb-4">Pay With PayPal</h3>
//                                 <PayPalButton amount={cart.totalPrice} onSuccess={handlePaymentSuccess} onError={() => alert("Payment Failed. Please Try Again")} />
//                             </div>
//                         )}
//                     </div>
//                 </form>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//                 <h2 className="text-2xl font-bold uppercase mb-6">Order Summary</h2>
//                 <div className="space-y-4">
//                     {cart.products.map((product, index) => (
//                         <div key={index} className="flex items-center border-b pb-4">
//                             <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
//                             <div>
//                                 <h3 className="font-semibold">{product.name}</h3>
//                                 <p className="text-gray-500 text-sm">Size: {product.size} | Color: {product.color}</p>
//                                 <p className="text-gray-700 font-semibold">Rs.{product.price}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
//                     <h3 className="font-semibold">Total: Rs.{cart.totalPrice}</h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Checkout;


// new code

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createCheckout } from "../../Redux/Slices/checkoutSlice";

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cart, loading, error } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        phone: "",
        country: "",
    });

    useEffect(() => {
        if (!cart || !cart.products || cart.products.length === 0) {
            navigate("/");
        }
    }, [cart, navigate]);

    const handleCreateCheckout = async (e) => {
        e.preventDefault();
        if (cart && cart.products.length > 0) {
            try {
                const res = await dispatch(
                    createCheckout({
                        checkoutItems: cart.products,
                        shippingAddress,
                        paymentMethod: "PayPal",
                        totalPrice: cart.totalPrice,
                    })
                ).unwrap();
                if (res && res._id) {
                    setCheckoutId(res._id);
                }
            } catch (error) {
                console.error("Error creating checkout:", error);
            }
        }
    };

    const handlePaymentSuccess = async (details) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
                { paymentStatus: "Paid", paymentDetails: details },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );
            if (response.status === 200) {
                await handleFinalizeCheckout(checkoutId);
            }
        } catch (error) {
            console.error("Payment update failed:", error);
        }
    };

    const handleFinalizeCheckout = async (checkoutId) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,
                {},
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );
            navigate("/order-confirmation");
        } catch (error) {
            console.error("Checkout finalization failed:", error);
        }
    };

    if (loading) return <p>Loading cart...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!cart || !cart.products || cart.products.length === 0) {
        return <p>Your Cart is Empty!</p>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold uppercase mb-6">Checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            className="w-full p-2 border rounded bg-gray-100"
                            disabled
                        />
                    </div>
                    <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={shippingAddress.firstName}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, firstName: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={shippingAddress.lastName}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, lastName: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Address"
                        value={shippingAddress.address}
                        onChange={(e) =>
                            setShippingAddress({ ...shippingAddress, address: e.target.value })
                        }
                        className="w-full p-2 border rounded my-4"
                        required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            value={shippingAddress.city}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, city: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            placeholder="State"
                            value={shippingAddress.state}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, state: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="postalCode"
                            value={shippingAddress.postalCode}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress,postalCode: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            value={shippingAddress.phone}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, phone: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 font-semibold">Country</label>
                        <input
                            type="text"
                            placeholder="Country"
                            value={shippingAddress.country}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, country: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        {!checkoutId ? (
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                            >
                                Proceed to Payment
                            </button>
                        ) : (
                            <div>
                                <h3 className="text-lg mb-4">Pay With PayPal</h3>
                                <PayPalButton
                                    amount={cart.totalPrice}
                                    onSuccess={handlePaymentSuccess}
                                    onError={() => alert("Payment Failed. Please Try Again")}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold uppercase mb-6">Order Summary</h2>
                <div className="space-y-4">
                    {cart.products.map((product, index) => (
                        <div key={index} className="flex items-center border-b pb-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-gray-500 text-sm">
                                    Size: {product.size} | Color: {product.color}
                                </p>
                                <p className="text-gray-700 font-semibold">Rs.{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <h3 className="font-semibold">Total: Rs.{cart.totalPrice}</h3>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
