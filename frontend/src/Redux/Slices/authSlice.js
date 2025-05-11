// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Retrieve user info and token from local storage if available
// const userFromStorage = localStorage.getItem("userInfo")
//  ? JSON.parse(localStorage.getItem("userInfo")) : null;

// // Check for an existing token guest Id in local storage or generate a new one
// const initialGuestId =localStorage.getItem("guestId") || `guest_${Date.now()}`;
// localStorage.setItem("guestId", initialGuestId);

// // initial state
// const initialState = {
//   user: userFromStorage,
//   guestId: initialGuestId,
//   loading: false,
//   error: null,
// };

// // Async thunk for user login
// export const loginUser = createAsyncThunk("auth/loginUser",
//      async (userData ,{rejectWithValue}) => {
//   try {
//     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
//          userData);
//     localStorage.setItem("userInfo", JSON.stringify(response.data.user));
//     localStorage.setItem("token", response.data.token);
//     return response.data.user; // Return the user object from the response
//   } catch (error) {
//     return rejectWithValue(error.response.data.message);
//   }
// });

// // Async thunk for user Registration
// // export const registerUser = createAsyncThunk("auth/registerUser",
// //     async (userData ,{rejectWithValue}) => {
// //  try {
// //    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`, { headers: { "Content-Type": "application/json" } },
// //         userData);
// //    localStorage.setItem("userInfo", JSON.stringify(response.data.user));
// //    localStorage.setItem("token", response.data.token);
// //    return response.data.user; // Return the user object from the response
// //  } catch (error) {
// //    return rejectWithValue(error.response.data.message);
// //  }
// // });



// export const registerUser = createAsyncThunk(
//     "auth/registerUser",
//     async (userData, { rejectWithValue }) => {
//       try {
//         const response = await axios.post(
//           `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
//           userData,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );
  
//         console.log("Full Response:", response.data); // ✅ Debugging log
  
//         if (!response.data.token) {
//           throw new Error("Token missing from response");
//         }
  
//         // Store user info & token
//         localStorage.setItem("userInfo", JSON.stringify(response.data.user));
//         localStorage.setItem("token", response.data.token);
  
//         return response.data.user;
//       } catch (error) {
//         console.error("Registration Error:", error.response?.data);
//         return rejectWithValue(error.response?.data?.message || "Registration failed");
//       }
//     }
//   );
  
  
  

// // Auth Slice
// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         // Clear user info and token from local storage
//         logout:(state)=>{
//             state.user = null;
//             state.guestId = `guest_${Date.now()}`; // Reset guest Id on logout
//             localStorage.removeItem("userInfo");
//             localStorage.removeItem("token");
//             localStorage.setItem("guestId", state.guestId); // Set new guest ID in localStorage
//         },
//         generateNewGuestId:(state)=>{
//             state.guestId = `guest_${Date.now()}`; // Generate a new guest ID
//             localStorage.setItem("guestId", state.guestId);
//         },
//     },
//     extraReducers:(builder)=>{
//         builder
//         .addCase(loginUser.pending,(state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(loginUser.fulfilled,(state,action)=>{
//             state.loading = false;
//             state.user = action.payload;
//         })
//         .addCase(loginUser.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.payload.message;
//         })
//         .addCase(registerUser.pending,(state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(registerUser.fulfilled,(state,action)=>{
//             state.loading = false;
//             state.user = action.payload;
//         })
//         .addCase(registerUser.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.payload.message;
//         })
        
//     }
// });
// export const {logout,generateNewGuestId} = authSlice.actions;
// export default authSlice.reducer;

// new code 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Retrieve user info and token from local storage
const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const tokenFromStorage = localStorage.getItem("token") || null;
const initialGuestId = localStorage.getItem("guestId") || `guest_${Date.now()}`;

// Save guest ID in localStorage if not already set
localStorage.setItem("guestId", initialGuestId);

// Initial state
const initialState = {
  user: userFromStorage,
  token: tokenFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null,
};

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        userData,
       { 
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }
      );

      console.log("Login Response:", response.data); // Debugging

      if (!response.data.token) {
        throw new Error("Token missing from response");
      }

      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      return { user: response.data.user, token: response.data.token };
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Register Response:", response.data); // Debugging

      if (!response.data.token) {
        throw new Error("Token missing from response");
      }

      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      return { user: response.data.user, token: response.data.token };
    } catch (error) {
      console.error("Register Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.guestId = `guest_${Date.now()}`;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      localStorage.setItem("guestId", state.guestId);
    },
    generateNewGuestId: (state) => {
      state.guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", state.guestId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;


