import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-72 bg-white">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.brand}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xl font-bold text-blue-600">₹{product.finalPrice}</span>
        {product.discount > 0 && (
          <span className="text-sm text-gray-400 line-through">₹{product.price}</span>
        )}
      </div>
      <span className="text-green-600 text-sm font-medium">{product.discount}% Off</span>
      <div className="mt-3 flex gap-2">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: color.toLowerCase() }}
          ></span>
        ))}
      </div>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
