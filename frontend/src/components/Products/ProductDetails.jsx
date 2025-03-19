import React, { useEffect, useState } from "react";
import {toast} from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, fetchSimilarProducts } from "../../Redux/Slices/productsSlice";
import { addToCart } from "../../Redux/Slices/cartSlice";
const ProductDetails = ({productId}) => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {selectedProduct,loading,error,similarProducts} = useSelector(
    (state)=>state.products
  );
  const {user,guestId} = useSelector((state)=>state.auth);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled,setIsButtonDisabled] = useState(false);
  
  const productFetchId =productId || id;
  useEffect(()=>{
    if(productFetchId){
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({id:productFetchId}));
    }
  },[dispatch,productFetchId]);



  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
   if(action === "plus") setQuantity((prev)=>prev + 1);
    if(action === "minus" && quantity > 1) setQuantity((prev)=>prev - 1);
  };

  const handleAddToCart =()=>{
    // Add product to cart logic here
    if(!selectedSize || !selectedColor){
        toast.error("Please Select a Size And Color before Adding to cart.",{
            duration:1000,
        });
        return;
    }
    setIsButtonDisabled(true);
   dispatch(
    addToCart({
      productId:productFetchId,
      quantity,
      size:selectedSize,
      color:selectedColor,
      guestId,
      userId:user?._id,
    })
   )
   .then(()=>{
    toast.success("Product added to cart successfully.",{
      duration:1000,
    });
   })
   .finally(()=>{
    setIsButtonDisabled(false);
   });
  };

  //check loading and error
  if(loading){
    return <p>Loading...</p>;
  }
  if(error){
    return <p>Something went wrong:{error}</p>;
    }
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {selectedProduct && (
        <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Flexbox container for layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left: Thumbnails & Main Image */}
          <div className="flex flex-col md:flex-row items-start md:w-1/2">
            {/* Left: Thumbnails (Desktop) */}
            <div className="hidden md:flex flex-col space-y-4 mr-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url ? image.url :null}
                  alt={image.altText || `Thumbnail ${index}`}
                  onClick={() => setMainImage(image.url)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border
                    ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full md:w-3/4">
              <img
                src={mainImage ? mainImage:null}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-3xl font-semibold mb-2">{selectedProduct.name}</h1>
            <p className="text-lg text-gray-600">
              <span className="line-through text-red-500">${selectedProduct.originalPrice}</span>{" "}
              <span className="text-black font-bold">${selectedProduct.price}</span>
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Color:</p>
              <div className="flex space-x-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border
                      ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.9)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border 
                      ${selectedSize === size ? "bg-black text-white" : "border-gray-300"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
            onClick={handleAddToCart}
            disabled={isButtonDisabled} 
            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 hover:bg-gray-900
            ${isButtonDisabled ? "Cursor-not-allowed opacity-50":"hover:bg-gray-900"}
            `}>
             {isButtonDisabled ? "Adding..!":"Add To Cart"} 
            </button>

            {/* Product Details Table */}
            <div className="mt-6 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Product Details</h3>
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Brand</td>
                    <td className="py-2">{selectedProduct.brand}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Material</td>
                    <td className="py-2">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
                {/* you may also likes */}
                <div className="mt-20">
                <h2 className="text-2xl text-center font-medium mb-4"> You May Also Like</h2>
                <ProductGrid products ={similarProducts}/>
                </div>


        {/* Mobile Thumbnails */}
        <div className="md:hidden flex overflow-x-scroll space-x-4 mt-4">
          {selectedProduct.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.altText || `Thumbnail ${index}`}
              onClick={() => setMainImage(image.url)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border
                ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
            />
          ))}
        </div>
      </div>
      )}
      
    </div>
  );
};

export default ProductDetails;
