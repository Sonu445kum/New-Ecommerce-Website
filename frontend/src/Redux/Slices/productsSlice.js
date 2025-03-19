// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// //Async thunk for fetching products by Collections and optional filters
// export const fetchProductsByFilters = createAsyncThunk(
//     "products/fetchByFilters",
//     async({
//         collection,
//         size,
//         color,
//         gender,
//         minPrice,
//         maxPrice,
//         sortBy,
//         search,
//         category,
//         material,
//         brand,
//         limit,
//     })=>{
//         const query = new URLSearchParams();
//         if(collection) query.append("collection", collection);
//         if(size) query.append("size", size);
//         if(color) query.append("color", color);
//         if(gender) query.append("gender", gender);
//         if(minPrice) query.append("minPrice", minPrice);
//         if(maxPrice) query.append("maxPrice", maxPrice);
//         if(sortBy) query.append("sortBy", sortBy);
//         if(search) query.append("search", search);
//         if(category) query.append("category", category);
//         if(material) query.append("material", material);
//         if(brand) query.append("brand", brand);
//         if(limit) query.append("limit", limit);

//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`);
//         return response.data;
        
//     }
// );

// //Async thunk to fetch a single product by ID
// export const fetchProductDetails = createAsyncThunk(
//     "products/fetchProductDetails",
//     async (id) => {
//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
//         return response.data;
//     }
// );

// //Async thunk to fetch similar products
// export const updateProduct = createAsyncThunk(
//     "products/updateProduct",
//     async({id,productData})=>{
//         const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
//              productData,
//             {
//                 headers: {
//                     Authorization:`Bearer ${localStorage.getItem("userToken")}`
//                     },
//             }
//             );
//             return response.data;
//     }
// );

// // Async thunk to fetch similar products
// // export const fetchSimilarProducts = createAsyncThunk(
// //     "products/fetchSimilarProducts",
// //     async (id) => {
// //         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`);
// //             return response.data;
// //     }
// // );
// export const fetchSimilarProducts = createAsyncThunk(
//     "products/fetchSimilarProducts",
//     async({id})=>{
//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`);
//         return response.data;
//     }
    
//   );
  

// //create product slice
// const productSlice = createSlice({
//     name: "products",
//     initialState: {
//         products: [],
//         selectedProduct:null, // Store the details of the single Product
//         similarProducts: [],
//         loading: false,
//         error: null,
//         filters:{
//             category:"",
//             size:"",
//             color:"",
//             gender:"",
//             brand:"",
//             minPrice:"",
//             maxPrice:"",
//             sortBy:"",
//             search:"",
//             material:"",
//             collection:"",

//         },
//     },
//     reducers:{
//         setFilters:(state,action)=>{
//             state.filters = {...state.filters,...action.payload};
//         },
//         clearFilters:(state)=>{
//             state.filters ={
//                 category:"",
//             size:"",
//             color:"",
//             gender:"",
//             brand:"",
//             minPrice:"",
//             maxPrice:"",
//             sortBy:"",
//             search:"",
//             material:"",
//             collection:"",
//             };
//         },
//     },
//     // extraReducers:(builder)=>{
//     //     builder
//     //     //handle fetching products with filter
//     //     .addCase(fetchProductsByFilters.pending,(state)=>{
//     //         state.loading = true;
//     //         state.error = null;
//     //     })
//     //     .addCase(fetchProductsByFilters.fulfilled,(state,action)=>{
//     //         state.loading = false;
//     //         state.products = Array.isArray(action.payload) ? action.payload : [] ;
//     //     })

//     //     .addCase(fetchProductsByFilters.rejected,(state,action)=>{
//     //       state.loading = false;
//     //       state.error = action.error.message;  
//     //     })

//     //     // Handle fetching single products details
//     //     .addCase(fetchProductDetails.pending,(state)=>{
//     //         state.loading = true;
//     //         state.error = null;
//     //     })
//     //     .addCase(fetchProductDetails.fulfilled,(state,action)=>{
//     //         state.loading = false;
//     //         state.selectedProduct = action.payload;
//     //     })

//     //     .addCase(fetchProductDetails.rejected,(state,action)=>{
//     //       state.loading = false;
//     //       state.error = action.error.message;  
//     //     })

//     //     // Handle the updating product
//     //     .addCase(updateProduct.pending,(state)=>{
//     //         state.loading = true;
//     //         state.error = null;
//     //     })
//     //     .addCase(updateProduct.fulfilled,(state,action)=>{
//     //         state.loading = false;
//     //         const updatedProduct = action.payload;
//     //         const index = state.products.findIndex(
//     //             (product) => product._id === updatedProduct._id
//     //         );
//     //         if(index !== -1){
//     //             state.products[index] = updateProduct;
//     //         }
//     //     })

//     //     .addCase(updateProduct.rejected,(state,action)=>{
//     //       state.loading = false;
//     //       state.error = action.error.message;  
//     //     })

//     //     //fetch the similar products;
//     //     .addCase(fetchSimilarProducts.pending,(state)=>{
//     //         state.loading = true;
//     //         state.error = null;
//     //     })
//     //     .addCase(fetchSimilarProducts.fulfilled,(state,action)=>{
//     //         state.loading = false;
//     //         state.products = action.payload;
//     //     })

//     //     .addCase(fetchSimilarProducts.rejected,(state,action)=>{
//     //       state.loading = false;
//     //       state.error = action.error.message;  
//     //     })

//     // },

//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProductsByFilters.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
//                 state.loading = false;
//                 console.log("API Response for fetchProductsByFilters:", action.payload); 
//                 state.products = Array.isArray(action.payload.products) ? action.payload.products : [];
//             })
//             .addCase(fetchProductsByFilters.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             .addCase(fetchProductDetails.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.selectedProduct = action.payload;
//             })
//             .addCase(updateProduct.fulfilled, (state, action) => {
//                 state.loading = false;
//                 const updatedProduct = action.payload;
//                 const index = state.products.findIndex(
//                     (product) => product._id === updatedProduct._id
//                 );
//                 if (index !== -1) {
//                     state.products[index] = updatedProduct;
//                 }
//             })
//             .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.similarProducts = Array.isArray(action.payload) ? action.payload : [];
//             });
//     }
    
// });

// export const {setFilters,clearFilters} = productSlice.actions;
// export default productSlice.reducer;


// new code 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch products based on filters
export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async ({
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  }) => {
    const query = new URLSearchParams();
    if (collection) query.append("collection", collection);
    if (size) query.append("size", size);
    if (color) query.append("color", color);
    if (gender) query.append("gender", gender);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);
    if (category) query.append("category", category);
    if (material) query.append("material", material);
    if (brand) query.append("brand", brand);
    if (limit) query.append("limit", limit);

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
    );
    return response.data;
  }
);

// Fetch single product details
export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
    );
    return response.data;
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return response.data;
  }
);

// Fetch similar products
// export const fetchSimilarProducts = createAsyncThunk(
//   "products/fetchSimilarProducts",
//   async ({ id }) => {
//     const response = await axios.get(
//       `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
//     );
//     return response.data;
//   }
// );
export const fetchSimilarProducts = createAsyncThunk(
    "products/fetchSimilar",
    async ({ id }, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
        );
        console.log("Similar Products API Response:", response.data);
        return response.data.similarProducts; //  Extract only similarProducts array
      } catch (error) {
        console.error("Error fetching similar products:", error);
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
    }
  );
  
  
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    similarProducts: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      size: "",
      color: "",
      gender: "",
      brand: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      search: "",
      material: "",
      collection: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        category: "",
        size: "",
        color: "",
        gender: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        material: "",
        collection: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.products = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        console.log("Updating Redux State with Similar Products:", action.payload);
        state.similarProducts = action.payload || []; //  Ensure an empty array if undefined
      });
      
  },
});

export const { setFilters, clearFilters } = productSlice.actions;
export default productSlice.reducer;
