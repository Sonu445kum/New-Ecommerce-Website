// import React, { useEffect, useState } from 'react'
// import Hero from '../components/Layout/Hero'
// import GenderCollectionSection from '../components/Products/GenderCollectionSection'
// import NewArrivals from '../components/Products/NewArrivals'
// import ProductDetails from '../components/Products/ProductDetails'
// import ProductGrid from '../components/Products/ProductGrid'
// import FeaturedCollections from '../components/Products/FeaturedCollections'
// import FeaturesSection from '../components/Products/FeaturesSection'
// import {useDispatch,useSelector} from "react-redux"
// import { fetchProductsByFilters } from '../Redux/Slices/productsSlice'
// import axios from 'axios'

// //object 
// // const placeHolderProducts=[
// //     {
// //         _id:1,
// //         name:"Jacket",
// //         price:2000,
// //         images:[{url:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
// //     },
// //     {
// //         _id:2,
// //         name:"shoe",
// //         price:3000,
// //         images:[{url:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"}]
// //     },
// //     {
// //         _id:3,
// //         name:"Jeans",
// //         price:4000,
// //         images:[{url:"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8fDA%3D"}]
// //     },
// //     {
// //         _id:4,
// //         name:"Jackets",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
// //     },
// //     {
// //         _id:5,
// //         name:"Court",
// //         price:5000,
// //         images:[{url:"https://plus.unsplash.com/premium_photo-1675186049563-000f7ac02c44?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
// //     },
// //     {
// //         _id:6,
// //         name:"Cheater Jackets",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1605908502724-9093a79a1b39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
// //     },
// //     {
// //         _id:7,
// //         name:"Jackets",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
// //     },
// //     {
// //         _id:8,
// //         name:"Jackets",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
// //     },
// //     {
// //         _id:9,
// //         name:"Jackets",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1580742471944-c1c187a943e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
// //     },
// //     {
// //         _id:10,
// //         name:"Jackets",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1578948856697-db91d246b7b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
// //     },
// //     {
// //         _id:11,
// //         name:"Shoes",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D"}]
// //     },
// //     {
// //         _id:12,
// //         name:"Shoes",
// //         price:5000,
// //         images:[{url:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D"}]
// //     },
    
// // ]

// const Home = () => {
//     const dispatch = useDispatch();
//     const {products,loading,error} = useSelector((state)=>state.products);
//     console.log("Redux State Products:", products);
//     const [bestSellerProduct,setBestSellerProduct] = useState(null);

//     useEffect(()=>{
//         // fetch products for a specific category
//         dispatch(fetchProductsByFilters({
//             gender:"women",
//             category:"Top Wear and Bottom Wear",
//             limit:8,
//         })
//     );
//     console.log("Fetched Products:", products);
//     // fetch best seller product
//     const fetchBestSellerProduct = async()=>{
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`);
//             setBestSellerProduct(response.data);
//         } catch (error) {
//             console.error("Error fetching best seller product:", error);
//         }
//     };
    
//     fetchBestSellerProduct();
//     },[dispatch]);
//   return (
//     <div>
//       <Hero/>
//       <GenderCollectionSection/>
//       <NewArrivals/>
//       {/* Best Seller */}
//       <h2 className='text-3xl text-center font-bold mb-4'>Best Sellers</h2>
//       {bestSellerProduct ? (
//         <ProductDetails productId ={bestSellerProduct._id}/>
//       ):(
//         <p>Loading best seller product...</p>
//       )}
     
     

//      {/* top wear for women */}
//      <div className='container mx-auto'>
//         <h2 className='text-3xl text-center font-bold mb-4'>Top Wears For Women</h2>
//         <ProductGrid products={products} loading={loading} error={error}/>
//      </div>
//      <FeaturedCollections/>
//      <FeaturesSection/>
//     </div>
//   )
// }

// export default Home

// new code
import React, { useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollections from "../components/Products/FeaturedCollections";
import FeaturesSection from "../components/Products/FeaturesSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../Redux/Slices/productsSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    dispatch(
      fetchProductsByFilters({
        gender: "women",
        category: "Top Wear",
        limit: 8,
      })
    );

    const fetchBestSellerProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error("Error fetching best seller product:", error);
      }
    };

    fetchBestSellerProduct();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p>Loading best seller product...</p>
      )}

      {/* Top wear for women */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears For Women</h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      <FeaturedCollections />
      <FeaturesSection />
    </div>
  );
};

export default Home;

