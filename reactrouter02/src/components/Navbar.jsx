//it remained the same in both the ways

//using link
// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="w-full px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
//             alt="Logo"
//             className="w-8 h-8"
//           />
//           <h1 className="text-xl font-semibold text-gray-800">MyStore</h1>
//         </div>

//         {/* Nav Items */}
//         <ul className="flex gap-6 text-gray-700 font-medium">
//           <li>
//             <Link to="/" className="hover:text-green-600">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-green-600">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="hover:text-green-600">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-green-600">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Button */}
//         <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-all">
//           Get Started
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


//using navlink
//navlink adds the {active} class in the <a> for every navlink created for the list
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    //useNavigate() helps in having a track of history and to move forward and backward
    const navigator=useNavigate();
  return (
    
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-semibold text-gray-800">MyStore</h1>
        </div>

        {/* Nav Items */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/products', label: 'Products' },
            { path: '/contact', label: 'Contact' },
            { path: '/jobs', label: 'Jobs' },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-green-600 transition-colors ${
                    isActive ? 'text-orange-500 font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Button */}
        {/* now clicking on the get started button it will take us to the about page*/}
        {/*{replace:true} just replaces the current history */}
        <button onClick={()=>{navigator('/about',{replace:true})}}
        className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-all">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar
