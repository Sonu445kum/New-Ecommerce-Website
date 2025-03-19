import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ProductManagement = () => {
  const products = [
    { _id: 1234, name: "Stylish Jacket", price: 1200, brand: "FashionBrand" },
    { _id: 5678, name: "Casual T-Shirt", price: 500, brand: "FashionBrand" },
    { _id: 9012, name: "Jeans", price: 1500, brand: "FashionBrand" },
    { _id: 3456, name: "Sneakers", price: 800, brand: "Nike" },
    { _id: 7890, name: "Hoodie", price: 1000, brand: "Jordan" },
    { _id: 1111, name: "Sweater", price: 900, brand: "Adidas" },
  ];

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Deleted Product:", id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Product Management</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left text-sm font-semibold">Name</th>
              <th className="p-4 text-left text-sm font-semibold">Price</th>
              <th className="p-4 text-left text-sm font-semibold">Brand</th>
              <th className="p-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-900 font-medium">{product.name}</td>
                  <td className="p-4 text-gray-700">Rs. {product.price}</td>
                  <td className="p-4 text-gray-700">{product.brand}</td>
                  <td className="p-4 flex space-x-2">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="flex items-center bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition duration-200"
                    >
                      <FiEdit className="mr-1" /> Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="flex items-center bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition duration-200"
                    >
                      <FiTrash2 className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
