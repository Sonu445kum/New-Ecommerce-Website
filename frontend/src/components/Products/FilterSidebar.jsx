// import React, { useEffect, useState } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// const FilterSidebar = () => {
//     const navigate = useNavigate();
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [filter,setFilter] = useState({
//         category:"",
//         gender:"",
//         color:"",
//         size:"",
//         material:[],
//         brand:[],
//         minPrice:0,
//         maxPrice:1000000,
//     });

//     const [priceRange,setPriceRange] =useState([0,100000]);
//     const categories =["Top Wear","Bottom Wear"];
//     const colors =[
//         "Red","Blue","Black","Green","Yellow","Gray","White","Pink","Beige","Navy"
//     ];

//     const sizes=["XS","S","M","L","XL","XXL"];

//     const materials =[
//         "Cotton","Polyester","Rayon","Silk","Wool","Linen","Viscose","Fleece"

//     ];

//     const brands =[
//         "Nike","Adidas","Puma","Reebok","Levis",
//         "Lee","Wrangler",,"Louis Phillipe","Allen Solly",
//         "Raymond",,"Van Heusen","Park Avenue","Oberoi",

//     ];
//     const genders =["Men","Female"];
//     //useEffect;
//    useEffect(()=>{
//     const params =Object.fromEntries([...searchParams]);

//     setFilter({
//         category:params.category || "",
//         gender:params.gender || "",
//         color:params.color || "",
//         size:params.size ? params.size.split(","):[],
//         material:params.material ? params.material.split(","):[],
//         brand:params.brand ? params.brand.split(","):[],
//         minPrice:params.minPrice ? parseInt(params.minPrice) : 0,
//         maxPrice:params.maxPrice ? parseInt(params.maxPrice) : 1000000,

//     });
//     setPriceRange([
//         params.minPrice ? parseInt(params.minPrice) : 0,
//         params.maxPrice ? parseInt(params.maxPrice) : 1000000
//         ]);
//    },[searchParams]);

//    //handleFilterChange
//    const handleFilterChange =(e)=>{
//     const {name,value,checked,type} = e.target;
//     console.log({name,value,checked,type});
//     let newFilter ={...filter};
//     if(type === "checkbox"){
//         if(checked){
//             newFilter[name] =[...(newFilter[name] || []),value];
//         }else{
//             newFilter[name] = newFilter[name].filter(item => item !== value);
//         }
//         }else{
//             newFilter[name] = value;
//         }
//         setFilter(newFilter);
//         console.log(newFilter);
//         updateUrlParams(newFilter);
//    };

//    //update urlParams
//    const updateUrlParams = (newFilter) => {
//     const params = new URLSearchParams();
//     // {category:"Top Wear",size:["XS","S"]}
//     Object.keys(newFilter).forEach((key)=>{
//         if(Array.isArray(newFilter[key]) && newFilter[key].length > 0){
//             params.append(key,newFilter[key].join(","));
//         }else if(newFilter[key]){
//             params.append(key,newFilter[key]);
//         }
//     });
//     setSearchParams(params);
//     navigate(`?${params.toString()}`);
//    }

//    const handlePriceChange =(e)=>{
//     const newPrice = e.target.value;
//     setPriceRange([0,newPrice]);
//     const newFilter ={...filter,minPrice:0,maxPrice:newPrice};
//     setFilter(newFilter);
//     updateUrlParams(newFilter);
//    }
//   return (
//     <div className='p-4'>
//         <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>

//         {/* category Filter */}
//         <div className='mb-6'>
//             <label className='block text-gray-600 font-medium mb-2'>Category</label>
//             {
//                 categories.map((category)=>(
//                    <div key={category} className='flex items-center mb-1'>
//                     <input type="radio"
//                     name='category'
//                     value={category}
//                     onChange={handleFilterChange}
//                     checked={filter.category === category}
//                     className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
//                     />
//                     <span className='text-gray-700'>{category}</span>
//                    </div>
//                 ))
//             }
//         </div>

//         {/* Gender Filter */}
//         <div className='mb-6'>
//             <label className='block text-gray-600 font-medium mb-2'>Genders</label>
//             {
//                 genders.map((gender)=>(
//                    <div key={gender} className='flex items-center mb-1'>
//                     <input type="radio"
//                     name='gender'
//                     value={gender}
//                     onChange={handleFilterChange}
//                     checked ={filter.gender === gender}
//                     className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
//                     />
//                     <span className='text-gray-700'>{gender}</span>
//                    </div>
//                 ))
//             }
//         </div>

//         {/* colors filter */}
//         <div className='mb-6'>
//             <label className='block text-gray-600 font-medium mb-2'>Colors</label> 
//             <div className='flex flex-wrap gap-2'>
//                 {
//                     colors.map((color)=>(
//                         <button key={color}
//                         name='color'
//                         value={color}
//                         onClick={handleFilterChange}
//                         className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105
//                             ${filter.color === color ? "ring-2 ring-blue-500" :""}
//                             `}
//                         style={{backgroundColor:color.toLowerCase()}}
//                         >

//                         </button>
//                     ))
//                 }

//             </div>
//         </div>
//         {/* Size Filter */}
//         <div className='mb-6'>
//             <label className='block text-gray-600 font-medium mb-2'>Sizes</label>
//             {
//                 sizes.map((size)=>(
//                     <div key={size} className='flex items-center mb-1'>
//                         <input type="checkbox"
//                         name='size'
//                         value={size}
//                         onChange={handleFilterChange}
//                         checked= {filter.size.includes(size)}
//                         className='mr-2 h-4 w-4 text-blue-800 focus:ring-blue-400 border-gray-300'
//                         />
//                         <span className='text-gray-700'>{size}</span>
//                     </div>
//                 ))
//             }
//         </div>
//         {/* Materials Filter */}
//         <div className='mb-6'>
//             <label className='block text-gray-600 font-medium mb-2'>Materials</label>
//             {
//                 materials.map((material)=>(
//                     <div key={material} className='flex items-center mb-1'>
//                         <input type="checkbox"
//                         name='material'
//                         value={material}
//                         onChange={handleFilterChange}
//                         checked= {filter.material.includes(material)}
//                         className='mr-2 h-4 w-4 text-blue-800 focus:ring-blue-400 border-gray-300'
//                         />
//                         <span className='text-gray-700'>{material}</span>
//                     </div>
//                 ))
//             }
//         </div>

//         {/* Brands Filter */}
//         <div className='mb-6'>
//             <label className='block text-gray-600 font-medium mb-2'>Brands</label>
//             {
//                 brands.map((brand)=>(
//                     <div key={brand} className='flex items-center mb-1'>
//                         <input type="checkbox"
//                         name='brand'
//                         value={brand}
//                         onChange={handleFilterChange}
//                         checked= {filter.brand.includes(brand)}
//                         className='mr-2 h-4 w-4 text-blue-800 focus:ring-blue-400 border-gray-300'
//                         />
//                         <span className='text-gray-700'>{brand}</span>
//                     </div>
//                 ))
//             }
//         </div>
//         {/* Price Range Filter */}
//         <div className='mb-8'>
//             <label className='block text-gray-600 font-medium mb-2'>Price Range</label>
//             <input type="range" 
//             name='priceRange'
//             min={0} max={100000}
//             value={priceRange[1]}
//             onChange={handlePriceChange}
//             className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
//             />
//             <div className='flex justify-between text-gray-600 mt-2'>
//                 <span>Rs.0</span>
//                 <span>Rs.{priceRange[1]}</span>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default FilterSidebar;

// new code 
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [filter, setFilter] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 1000000,
    });

    const [priceRange, setPriceRange] = useState([0, 100000]);

    const categories = ["Top Wear", "Bottom Wear"];
    const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Polyester", "Rayon", "Silk", "Wool", "Linen", "Viscose", "Fleece"];
    const brands = ["Nike", "Adidas", "Puma", "Reebok", "Levis", "Lee", "Wrangler", "Louis Phillipe", "Allen Solly", "Raymond", "Van Heusen", "Park Avenue", "Oberoi"];
    const genders = ["men", "women"];

    // Effect to sync state with URL params
    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilter({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice ? parseInt(params.minPrice) : 0,
            maxPrice: params.maxPrice ? parseInt(params.maxPrice) : 1000000,
        });

        setPriceRange([
            params.minPrice ? parseInt(params.minPrice) : 0,
            params.maxPrice ? parseInt(params.maxPrice) : 1000000
        ]);
    }, [searchParams]);

    //  Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        let newFilter = { ...filter };

        if (type === "checkbox") {
            if (checked) {
                newFilter[name] = [...(newFilter[name] || []), value];
            } else {
                newFilter[name] = newFilter[name].filter(item => item !== value);
            }
        } else {
            newFilter[name] = value;
        }

        setFilter(newFilter);
        updateUrlParams(newFilter);
    };

    //  Handle color filter separately (for button click)
    const handleColorChange = (color) => {
        let newFilter = { ...filter, color: filter.color === color ? "" : color };
        setFilter(newFilter);
        updateUrlParams(newFilter);
    };

    //  Update URL parameters
    const updateUrlParams = (newFilter) => {
        const params = new URLSearchParams();

        Object.keys(newFilter).forEach((key) => {
            if (Array.isArray(newFilter[key]) && newFilter[key].length > 0) {
                params.set(key, newFilter[key].join(","));
            } else if (newFilter[key]) {
                params.set(key, newFilter[key]);
            }
        });

        setSearchParams(params);
        navigate(`?${params.toString()}`);
    };

    // Handle price range change
    const handlePriceChange = (e) => {
        const newMaxPrice = parseInt(e.target.value);
        setPriceRange([0, newMaxPrice]);

        const newFilter = { ...filter, minPrice: 0, maxPrice: newMaxPrice };
        setFilter(newFilter);
        updateUrlParams(newFilter);
    };

    return (
        <div className='p-4'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>

            {/* Category Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Category</label>
                {categories.map((category) => (
                    <div key={category} className='flex items-center mb-1'>
                        <input type="radio" name='category' value={category} onChange={handleFilterChange}
                            checked={filter.category === category} className='mr-2 h-4 w-4 text-blue-500' />
                        <span className='text-gray-700'>{category}</span>
                    </div>
                ))}
            </div>

            {/* Gender Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Gender</label>
                {genders.map((gender) => (
                    <div key={gender} className='flex items-center mb-1'>
                        <input type="radio" name='gender' value={gender} onChange={handleFilterChange}
                            checked={filter.gender === gender} className='mr-2 h-4 w-4 text-blue-500' />
                        <span className='text-gray-700'>{gender}</span>
                    </div>
                ))}
            </div>

            {/* Colors Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Colors</label>
                <div className='flex flex-wrap gap-2'>
                    {colors.map((color) => (
                        <button key={color} onClick={() => handleColorChange(color)}
                            className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105
                            ${filter.color === color ? "ring-2 ring-blue-500" : ""}`}
                            style={{ backgroundColor: color.toLowerCase() }}>
                        </button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Sizes</label>
                {sizes.map((size) => (
                    <div key={size} className='flex items-center mb-1'>
                        <input type="checkbox" name='size' value={size} onChange={handleFilterChange}
                            checked={filter.size.includes(size)} className='mr-2 h-4 w-4 text-blue-800' />
                        <span className='text-gray-700'>{size}</span>
                    </div>
                ))}
            </div>

            {/* Brands Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Brands</label>
                {brands.map((brand) => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input type="checkbox" name='brand' value={brand} onChange={handleFilterChange}
                            checked={filter.brand.includes(brand)} className='mr-2 h-4 w-4 text-blue-800' />
                        <span className='text-gray-700'>{brand}</span>
                    </div>
                ))}
            </div>

            {/* Price Range Filter */}
            <div className='mb-8'>
                <label className='block text-gray-600 font-medium mb-2'>Price Range</label>
                <input type="range" name='priceRange' min={0} max={100000} value={priceRange[1]}
                    onChange={handlePriceChange} className='w-full h-2 bg-gray-300 rounded-lg' />
                <div className='flex justify-between text-gray-600 mt-2'>
                    <span>Rs.0</span>
                    <span>Rs.{priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;



