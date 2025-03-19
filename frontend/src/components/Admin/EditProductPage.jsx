// import React, { useState } from 'react'

// const EditProductPage = () => {
//     const [productData,setProductData] = useState({
//         name:"",
//         description:"",
//         price:0,
//         countInStock:0,
//         brand:"",
//         category:"",
//         sizes:[],
//         colors:[],
//         collections:"",
//         material:"",
//         gender:"",
//         images:[
//             {
//                 url:"https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0fGVufDB8fDB8fHww",
//             },
//             {
//                 url:"https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fHww",
//             },
//         ]
//     });

//     const handleProductChange=(e)=>{
//         const {name,value} = e.target;
//         setProductData((prevData)=>({...prevData,[name]:value}));

//     }
//    //upload images
//    const handleImageUpload= async(e)=>{
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);
    
//    }
    
//   return (
//     <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
//         <h2 className='text-3xl font-bold mb-6'>Edit Product</h2>
//       <form action="">
//         {/* name */}
//         <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Product Name</label>
//             <input type="text" placeholder='Product Name' 
//             name='name'
//             value={productData.name}
//             onChange={handleProductChange}
//             className='w-full border border-gray-300 rounded-md p-2'
//             required
//             />
//         </div>
//         {/* description */}
//         <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Description</label>
//             <textarea name="description"
//              value={productData.description}
//               onChange={handleProductChange}
//               placeholder='Product Description' 
//               className="w-full border border-gray-300 rounded-md p-2"
//               rows={4}
//               required
//               > 
//             </textarea>
//         </div>
//         {/* price */}
//         <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Price</label>
//             <input type="number" placeholder='Product Price' 
//             name='price'
//             value={productData.price}
//             onChange={handleProductChange}
//             className='w-full border border-gray-300 rounded-md p-2'
//             required
//             />
//         </div>
//         {/* Count in Stock */}
//         <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Count In Stock</label>
//             <input type="number" placeholder='Product Count In Stock' 
//             name='countInStock'
//             value={productData.countInStock}
//             onChange={handleProductChange}
//             className='w-full border border-gray-300 rounded-md p-2'
//             required
//             />
//         </div>
//         {/* brand */}
//         <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Brand</label>
//             <input type="text" placeholder='Product Brand' 
//             name='countInStock'
//             value={productData.brand}
//             onChange={handleProductChange}
//             className='w-full border border-gray-300 rounded-md p-2'
//             required
//             />
//         </div>
//          {/* Sizes */}
//          <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Sizes (Comma separated)</label>
//             <input type="text" placeholder='Product Sizes' 
//             name='sizes'
//             value={productData.sizes.join(", ")}
//             onChange={(e)=>setProductData({
//                 ...productData,
//                 sizes:e.target.value.split(",").map((size)=>size.trim())
//             })}
//             className='w-full border border-gray-300 rounded-md p-2'
//             required
//             />
//         </div>
//         {/* colors */}
//         <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Colors (Comma separated)</label>
//             <input type="text" placeholder='Product Colors' 
//             name='colors'
//             value={productData.colors.join(", ")}
//             onChange={(e)=>setProductData({
//                 ...productData,
//                 colors:e.target.value.split(",").map((color)=>color.trim())
//             })}
//             className='w-full border border-gray-300 rounded-md p-2'
//             required
//             />
//         </div>
//         {/* Images Upload */}
//         <div className='mb-6'>
//             <label className='block font-semibold mb-2'>Upload Images</label>
//             <input type="file" onChange={handleImageUpload} />
//             <div className='flex gap-4 mt-4'>
//                 {productData.images.map((image, index) => (
//                     <div key={index}>
//                     <img  src={image.url} alt={image.name} 
//                     className='w-20 h-20 object-cover rounded-md mb-2'
//                     />
//                     </div>
//                 ))}
//             </div>
//         </div>
//         <button type='submit'
//         className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors'
//         >
//             Update Product
//         </button>
//       </form>
//     </div>
//   )
// }

// export default EditProductPage

import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi"; // Import trash icon

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    brand: "",
    category: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=1000&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1000&auto=format&fit=crop&q=60",
      },
    ],
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Upload images
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file); // Temporary preview
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: newImageUrl }],
      }));
    }
  };

  // Delete image
  const handleDeleteImage = (index) => {
    setProductData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={productData.name}
            onChange={handleProductChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleProductChange}
            placeholder="Product Description"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            placeholder="Product Price"
            name="price"
            value={productData.price}
            onChange={handleProductChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Count in Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count In Stock</label>
          <input
            type="number"
            placeholder="Product Count In Stock"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleProductChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Brand */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Brand</label>
          <input
            type="text"
            placeholder="Product Brand"
            name="brand"
            value={productData.brand}
            onChange={handleProductChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Sizes (Comma separated)</label>
          <input
            type="text"
            placeholder="Product Sizes"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Colors (Comma separated)</label>
          <input
            type="text"
            placeholder="Product Colors"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Images Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Images</label>
          <input type="file" onChange={handleImageUpload} className="mb-2" />
          <div className="flex gap-4 mt-4 flex-wrap">
            {productData.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={`Product ${index}`}
                  className="w-20 h-20 object-cover rounded-md shadow-md transition-transform transform group-hover:scale-110"
                />
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-all"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;

