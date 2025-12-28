//new way 
//in this way we created a router and then we called it in app.jsx whereas the navbadr is being called in rootlayout.jsx
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import JobsLayout from './layout/JobsLayout'

import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import Jobs, { JobsLoader } from './pages/Jobs'
import JobDetails, { JobDetailsLoader } from './layout/JobDetails'
import NotFound from './components/NotFound'
import Error from './components/Error'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />

        {/* Nested Contact */}
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>

        {/* Jobs Routing */}
        <Route path='jobs' element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={JobsLoader} />
          <Route path=':id' element={<JobDetails />} loader={JobDetailsLoader} errorElement={<Error />}/>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App




// //initial code
// import Navbar from './components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Products from './pages/Products'
// import About from './pages/About'
// import Contact from './pages/Contact'

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <div className="flex-grow flex items-center justify-center px-4 py-10 bg-gray-50">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App

