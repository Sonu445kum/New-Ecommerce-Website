// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import login from "../assets/login.avif";
// import { loginUser } from '../Redux/Slices/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { mergeCart } from '../Redux/Slices/cartSlice';
// const Login = () => {
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
//     },[user,guestId,cart,navigate,isCheckoutRedirect,dispatch]);

//     // form submit
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(loginUser({email,password}));
//         // console.log("User Login:",{email,password});
//         }
//     return (
//         <div className="flex min-h-screen bg-gray-100">
//             {/* Left side (Form) */}
//             <div className="w-full md:w-1/2 flex items-center justify-center p-6">
//                 <form 
//                 onSubmit={handleSubmit}
//                  className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//                         Welcome Back!
//                     </h2>
//                     <p className="text-center text-gray-600 mb-6">
//                         Login to your account to continue.
//                     </p>

//                     {/* Email Input */}
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

//                     {/* Password Input */}
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

//                     {/* Sign In Button */}
//                     <button 
//                         type="submit" 
//                         className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mb-4"
//                     >
//                         Sign In
//                     </button>

//                     {/* Google Login Button
//                     <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
//                         <span>🔴</span> Sign in with Google
//                     </button> */}

//                     {/* Register Link */}
//                     <p className="text-center text-gray-600 mt-4">
//                         Don't have an account?{" "}
//                         <Link to={`/register?redirect=${encodeURIComponent(redirect)}`} className="text-blue-500 font-semibold hover:underline">
//                             Register Now
//                         </Link>
//                     </p>
//                 </form>
//             </div>

//             {/* Right side (Image) */}
//             <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-800">
//                 <img src={login} alt="Login" className="h-screen w-full object-cover" />
//             </div>
//         </div>
//     );
// };

// export default Login;

// new code 
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Slices/authSlice";
import { mergeCart } from "../Redux/Slices/cartSlice";
import login from "../assets/login.avif";
import { motion } from "framer-motion";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, guestId } = useSelector((state) => state.auth);
    console.log("GuestId sonuL:", guestId);
    const { cart } = useSelector((state) => state.cart);
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";

    useEffect(() => {
        if (user) {
            if (cart?.products?.length > 0 && guestId) {
                dispatch(mergeCart({ guestId, user }))
                    .unwrap()
                    .then(() => navigate(redirect))
                    .catch(console.error);
            } else {
                navigate(redirect);
            }
        }
    }, [user, guestId, cart?.products?.length, navigate, redirect, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        navigate(redirect);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-800">
                <motion.img src={login} alt="Login" 
                    className="w-3/4 rounded-lg shadow-lg" 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                <motion.form 
                    onSubmit={handleSubmit} 
                    className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Welcome Back!</h2>
                    <div className="mb-4">
                        <label className="block text-gray-600">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign In
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account? 
                        <Link 
                            to={`/register?redirect=${encodeURIComponent(redirect)}`} 
                            className="text-blue-500 hover:underline"
                        > Register Now</Link>
                    </p>
                </motion.form>
            </div>
        </div>
    );
};

export default Login;


