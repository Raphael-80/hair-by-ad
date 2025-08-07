import React, { useState } from 'react';

const AboutNavbar = () => {

    return (
        <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
                
            </div>
        </div>
    )
}

export default AboutNavbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ solid }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={`w-full z-50 ${solid ? "fixed bg-white shadow" : "absolute top-0 left-0"}`}>
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link to="/" className={`text-2xl font-bold ${solid ? "text-gray-900" : "text-white"}`}>
//           FocusForge
//         </Link>

//         {/* Desktop Nav Links */}
//         <div className="space-x-6 hidden md:flex">
//           <Link to="/" className={`${solid ? "text-gray-800" : "text-white"} hover:text-red-500`}>Home</Link>
//           <Link to="/articles" className={`${solid ? "text-gray-800" : "text-white"} hover:text-red-500`}>Articles</Link>
//           <Link to="/about" className={`${solid ? "text-gray-800" : "text-white"} hover:text-red-500`}>About</Link>
//           <Link to="/contact" className={`${solid ? "text-gray-800" : "text-white"} hover:text-red-500`}>Contact</Link>
//         </div>

//         {/* Hamburger Icon */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <svg
//             className={`w-6 h-6 ${solid ? "text-gray-900" : "text-white"}`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className={`md:hidden px-6 pt-4 pb-6 space-y-3 ${solid ? "bg-white text-gray-900" : "bg-black text-white"} backdrop-blur-md bg-opacity-90 transform transition-all duration-300 ease-in-out ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
//           <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Home</Link>
//           <Link to="/articles" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Articles</Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">About</Link>
//           <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
