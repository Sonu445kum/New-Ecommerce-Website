// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import registerImg from "../assets/reg.avif";
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../Redux/Slices/authSlice';
// import { mergeCart } from '../Redux/Slices/cartSlice';
// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
   
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const {user,guestId} = useSelector((state)=>state.auth);
//     const {cart} = useSelector((state)=>state.cart);

//     //Get redirect parameter and check if its checkout or something
//     const redirect = new URLSearchParams(location.search).get("redirect") || "/";
//     const isCheckoutRedirect = redirect.includes("checkout");

//     //useEffect
//     useEffect(()=>{
//         if(user){
//             if(cart?.products.length > 0 && guestId){
//                 dispatch(mergeCart({guestId,user})).then(()=>{
//                     navigate(isCheckoutRedirect ? "/checkout" : "/");
//                 });
//             }else{
//                 navigate(isCheckoutRedirect ? "/checkout" : "/");
//             }
//         }
//     },[user,guestId,cart,navigate,isCheckoutRedirect,dispatch])
//     // form submit
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({ name, email, password }); // Check values before sending
//         dispatch(registerUser({ name, email, password }));
//         setName("");
//         setEmail("");
//         setPassword("");
//     };

//     return (
//         <div className="flex min-h-screen bg-gray-100">
//             {/* Left side (Form) */}
//             <div className="w-full md:w-1/2 flex items-center justify-center p-6">
//                 <form 
//                 onSubmit={handleSubmit}
//                  className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//                         Create an Account
//                     </h2>
//                     <p className="text-center text-gray-600 mb-6">
//                         Register now to get started!
//                     </p>

//                     {/* Full Name */}
//                     <div className="mb-4">
//                         <label className="block text-sm font-semibold text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//                             placeholder="Enter Your Full Name"
//                         />
//                     </div>

//                     {/* Email */}
//                     <div className="mb-4">
//                         <label className="block text-sm font-semibold text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//                             placeholder="Enter Your Email"
//                         />
//                     </div>

//                     {/* Password */}
//                     <div className="mb-4">
//                         <label className="block text-sm font-semibold text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//                             placeholder="Enter Your Password"
//                         />
//                     </div>

                   

//                     {/* Register Button */}
//                     <button 
//                         type="submit" 
//                         className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mb-4"
//                     >
//                         Register
//                     </button>

//                     {/* Google Sign-Up Button
//                     <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
//                         <span>🔴</span> Sign up with Google
//                     </button> */}

//                     {/* Already have an account? */}
//                     <p className="text-center text-gray-600 mt-4">
//                         Already have an account?{" "}
//                         <Link to={`/login?redirect=${encodeURIComponent(redirect)}`} className="text-blue-500 font-semibold hover:underline">
//                             Login Here
//                         </Link>
//                     </p>
//                 </form>
//             </div>

//             {/* Right side (Image) */}
//             <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-800">
//                 <img src={registerImg} alt="Register" className="h-screen w-full object-cover" />
//             </div>
//         </div>
//     );
// };

// export default Register;

// new code
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/Slices/authSlice";
import { mergeCart } from "../Redux/Slices/cartSlice";
import registerImg from "../assets/reg.avif";
import { motion } from "framer-motion";

const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, guestId } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);
    
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";

    useEffect(() => {
        if (user) {
            dispatch(mergeCart({ guestId, user })).then(() => navigate(redirect));
        }
    }, [user, guestId, cart, navigate, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(form));
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex-col md:flex-row items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 flex items-center justify-center p-6"
            >
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-700">Create an Account</h2>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Name</label>
                        <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">Sign Up</button>
                    <p className="text-center mt-4 text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                </form>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
                className="hidden md:flex w-1/2 items-center justify-center p-6"
            >
                <img src={registerImg} alt="Register" className="w-3/4 rounded-lg shadow-lg" />
            </motion.div>
        </div>
    );
};

export default Register;