import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

/*authentication = true    private route
authStatus = false       user not logged in*/

//initially authStatus is false and authentication is true 


// we are having Protected method here to protect certain routes based on authentication status
export default function Protected({children,authentication=true}) { //authentication decides what should be private and what should be public. and wheter the user is logged in or not is decided by authStatus. and by default we r setting authentication to true means the route is private
    const authStatus=useSelector((state)=>state.auth.status);
    const navigate=useNavigate();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        if(authentication&&authStatus!==authentication){//it means the user requires authentication to access the route but he is not authenticated so we will redirect him to login page. in this case the user is trying to access a private route without being logged in
            navigate('/login');//A logged-out user is trying to access a private page. So it will be redirected to login page
        }else if(!authentication&&authStatus!==authentication){// it means the user is authenticated but he is trying to access a route which doesn't require authentication like login or signup page so we will redirect him to home page
            navigate('/');//A logged-in user is trying to access a login/signup page so it will be redirected to home page
        }
        setLoading(false);        
    },[authStatus,navigate,authentication])
  return loading?<h1>Loading...</h1>:<>{children}</>
}

