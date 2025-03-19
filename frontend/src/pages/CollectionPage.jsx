import React, { useEffect, useRef, useState } from 'react'
import {FaFilter} from "react-icons/fa"
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../Redux/Slices/productsSlice';
const CollectionPage = () => {
    const {collection} = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const {products,loading,error} =useSelector((state)=>state.products);
    const queryParams = Object.fromEntries([...searchParams]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    //state
    

    //useEffects
    useEffect(()=>{
       dispatch(fetchProductsByFilters({collection, ...queryParams})); 
    },[dispatch,collection,searchParams]);

    const toggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleClickOutSide =(e)=>{
        // close sidebar if clicked outside
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
            }
    }

    useEffect(()=>{
        // Add Event Listener for clicks
        document.addEventListener("mousedown",handleClickOutSide);
        // clean event listener
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutSide);
        }
        
    },[])
    //useEffect
    // useEffect(()=>{

    //     setTimeout(()=>{
    //         const fetchProducts =[
    //             {
    //                 _id:1,
    //                 name:"Jacket",
    //                 price:2000,
    //                 images:[{url:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
    //             },
    //             {
    //                 _id:2,
    //                 name:"shoe",
    //                 price:3000,
    //                 images:[{url:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"}]
    //             },
    //             {
    //                 _id:3,
    //                 name:"Jeans",
    //                 price:4000,
    //                 images:[{url:"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8fDA%3D"}]
    //             },
    //             {
    //                 _id:4,
    //                 name:"Jackets",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
    //             },
    //             {
    //                 _id:5,
    //                 name:"Court",
    //                 price:5000,
    //                 images:[{url:"https://plus.unsplash.com/premium_photo-1675186049563-000f7ac02c44?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
    //             },
    //             {
    //                 _id:6,
    //                 name:"Cheater Jackets",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1605908502724-9093a79a1b39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
    //             },
    //             {
    //                 _id:7,
    //                 name:"Jackets",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
    //             },
    //             {
    //                 _id:8,
    //                 name:"Jackets",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D"}]
    //             },
    //             {
    //                 _id:9,
    //                 name:"Jackets",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1580742471944-c1c187a943e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
    //             },
    //             {
    //                 _id:10,
    //                 name:"Jackets",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1578948856697-db91d246b7b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphY2tldHN8ZW58MHx8MHx8fDA%3D"}]
    //             },
    //             {
    //                 _id:11,
    //                 name:"Shoes",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D"}]
    //             },
    //             {
    //                 _id:12,
    //                 name:"Shoes",
    //                 price:5000,
    //                 images:[{url:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D"}]
    //             },
                 
    //         ];
    //         //setProducts
    //         setProducts(fetchProducts);
    //     },1000);  
    // },[]);
  return (
    <div className='flex flex-col lg:flex-row'>
        {/* mobile Filter Button */}
        <button 
        onClick={toggleSidebar}
        className='lg:hidden border p-2 flex justify-center items-center'>
            <FaFilter className='mr-2'/>
            Filters
        </button>
        {/* filter Sidebar */}
        <div ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50
        left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 
        lg:static lg:translate-x-0
        `}
        >
          <FilterSidebar/>  
        </div>
        <div className='flex-grow p-4'>
            <h2 className='text-2xl uppercase mb-4'>All Collections</h2>

            {/* sort Options */}
            <SortOptions/>

            {/* products Grid */}
            <ProductGrid products={products} loading={loading} error={error}/>
        </div>

      
    </div>
  )
}

export default CollectionPage


