// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const NewArrivals = () => {
//   const [newArrivals, setNewArrivals] = useState([]);
//   const [showLeftButton, setShowLeftButton] = useState(false);
//   const [showRightButton, setShowRightButton] = useState(true);
//   const [isDragging, setIsDragging] = useState(false);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`);
//         setNewArrivals(response.data);
//       } catch (error) {
//         console.error("Error fetching new arrivals:", error);
//       }
//     };
//     fetchNewArrivals();
//   }, []);

//   const updateScrollButtons = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setShowLeftButton(scrollLeft > 0);
//       setShowRightButton(scrollLeft + clientWidth < scrollWidth);
//     }
//   };

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       container.addEventListener("scroll", updateScrollButtons);
//       updateScrollButtons();
//     }
//     return () => {
//       if (container) {
//         container.removeEventListener("scroll", updateScrollButtons);
//       }
//     };
//   }, [newArrivals]);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 300;
//       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//     }
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     scrollRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
//     scrollRef.current.scrollLeftStart = scrollRef.current.scrollLeft;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - scrollRef.current.startX) * 2;
//     scrollRef.current.scrollLeft = scrollRef.current.scrollLeftStart - walk;
//   };

//   const handleMouseUp = () => setIsDragging(false);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove);
//       container.addEventListener("mouseup", handleMouseUp);
//       container.addEventListener("mouseleave", handleMouseUp);
//     }
//     return () => {
//       if (container) {
//         container.removeEventListener("mousemove", handleMouseMove);
//         container.removeEventListener("mouseup", handleMouseUp);
//         container.removeEventListener("mouseleave", handleMouseUp);
//       }
//     };
//   }, [isDragging]);

//   return (
//     <div className="relative w-full max-w-7xl mx-auto px-4">
//       <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">New Arrivals</h2>
//       <div className="relative">
//         {showLeftButton && (
//           <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-700 transition" onClick={() => scroll("left")}>
//             <ChevronLeft size={24} />
//           </button>
//         )}
//         <div
//           ref={scrollRef}
//           className={`flex overflow-x-scroll space-x-6 scrollbar-hide cursor-grab p-4 rounded-lg shadow-md bg-gray-50 ${isDragging ? "cursor-grabbing" : ""}`}
//           onMouseDown={handleMouseDown}
//         >
//           {newArrivals.map((product, index) => (
//             <Link key={`${product.id}-${index}`} to={`/product/${product.id}`} className="min-w-[220px] p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
//               <img src={product.images[0].url} alt={product.name} className="w-full h-44 object-cover rounded-md mb-2" />
//               <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
//               <p className="text-gray-500 font-medium">${product.price}</p>
//             </Link>
//           ))}
//         </div>
//         {showRightButton && (
//           <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-700 transition" onClick={() => scroll("right")}>
//             <ChevronRight size={24} />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewArrivals;

// new code
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "react-feather";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef(null);

  // Fetch new arrivals from the backend
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`);
        console.log("New Arrivals Data:", response.data); // Debugging log
        setNewArrivals(response.data);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      }
    };
    fetchNewArrivals();
  }, []);

  // Update scroll buttons visibility
  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  // Scroll functionality
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Dragging functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    scrollRef.current.startX = e.pageX;
    scrollRef.current.scrollLeftStart = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.pageX - scrollRef.current.startX;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeftStart - dx;
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [isDragging]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">New Arrivals</h2>
      <div className="relative">
        {showLeftButton && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-700 transition"
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div
          ref={scrollRef}
          className={`flex overflow-x-scroll space-x-6 scrollbar-hide cursor-grab p-4 rounded-lg shadow-md bg-gray-50 ${
            isDragging ? "cursor-grabbing" : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {newArrivals.map((product, index) => {
            if (!product._id || !product.images || product.images.length === 0) {
              console.warn("Invalid product data:", product); // Debugging log
              return null; // Skip rendering invalid products
            }

            return (
              <Link
                key={`${product._id}-${index}`}
                to={`/product/${product._id}`}
                className="min-w-[220px] p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={product.images[0]?.url || "/placeholder-image.jpg"}
                  alt={product.name || "Product Image"}
                  className="w-full h-44 object-cover rounded-md mb-2"
                />
                <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
                <p className="text-gray-500 font-medium">${product.price}</p>
              </Link>
            );
          })}
        </div>
        {showRightButton && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-700 transition"
            onClick={() => scroll("right")}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;