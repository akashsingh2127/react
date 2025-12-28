import React, { use } from 'react'
import {Containers,Logo, LogoutBtn} from './index';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";//useSelector is used to access the redux store state because redux is a global state management tool so to access the global state we use useSelector hook like for sending data we use useDispatch hook
import { useNavigate } from 'react-router-dom';//useNavigate is used to navigate programmatically in simple words to redirect user to different routes for example after login or logout

function Header() {
  const authStatus=useSelector((state)=>state.auth.status);//incase there is nothing such auth state then by default it will be false but here it will get the actual auth status from the store

  const navigate=useNavigate();// whenever we create this kind of navigation bar then usually the looping is done over the array of objects containing the name and path of different routes but here for simplicity we are not doing that and we use useNavigate hook to navigate programmatically on clicking each button
  const navItems=[//array of navigation items where we have objects containing name , slug and active status. for example login and signup will be active only when user is not logged in so their active status will be opposite of authStatus
      { 
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Containers>
        <nav className="flex justify-between items-center">
          <div >
            <Link to="/">
              <Logo width="120px"/>
            </Link>
          </div>
          <ul className="flex gap-8 items-center">
            {navItems.map((item) =>
              item.active?(
                <li key={item.name}>
                  <button className="text-lg font-medium text-white hover:text-gray-200 cursor-pointer" onClick={()=>{
                  navigate(item.slug)
                }}>
                  {item.name}
                </button>                  
                </li>
              ):
                null  )}  
                {authStatus&&(//if user is logged in then only logout button will be shown
                  <li>
                    <LogoutBtn/>
                  </li>
                )}          
            </ul>          
          </nav>
      </Containers>
    </header>
  );
}
// in the above code mainly the return part is jsx where we have created a navigation bar having logo on left side and navigation items on right side and the navigation items are being rendered by mapping over an array of objects named navItems where each object contains name, slug and active status of each navigation item and based on active status the items are conditionally rendered so that login and signup are shown only when user is not logged in and all posts and add post are shown only when user is logged in and on clicking each navigation item the user is redirected to respective route using useNavigate hook

export default Header