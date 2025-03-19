// import React from "react";
// import { Link } from "react-router-dom";

// const ProductGrid = ({ products, loading, error }) => {
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error.message}</p>;
    
//     // Ensure products is an array before mapping
//     if (!Array.isArray(products)) {
//       console.error("Products is not an array:", products);
//       return <p>No products available</p>;
//     }
  
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <Link key={index} to={`/product/${product._id}`} className="block">
//             <div className="bg-white p-4 rounded-lg">
//               <div className="w-full h-96 mb-4">
//                 <img
//                   src={product.images[0]?.url}
//                   alt={product.images[0]?.altText || product.name}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//               <h3 className="text-sm mb-2">{product.name}</h3>
//               <p className="text-gray-500 font-medium text-sm tracking-tighter">
//                 ₹‎ {product.price}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     );
//   };

// export default ProductGrid;

// new code
import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">
              ₹‎ {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;

