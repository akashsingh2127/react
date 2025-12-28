import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {login as authLogin} from '../features/authSlice'//importing login action from authSlice
import {Button,Input,Logo} from './index'
import {useDispatch} from 'react-redux'
//import authService from '../appwrite/auth_service'//in postCard we r using appwrite service to get file preview and we r getting the appwrite service here from config file as we have exported it there in the name appwriteService but here in login we r using auth_service file because here we need authentication service
import {useForm} from 'react-hook-form'//to manage form state and validation. in easy words it helps to handle form submission and validation easily
import authService from '../appwrite/auth_service'

function Login() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const{register,handleSubmit,}=useForm();// destructuring the useForm hook to get register and handleSubmit methods. register method is used to register input fields and handleSubmit method is used to handle form submission where we give our custom login function
    const [error,setError]=useState("");// to hold any error that comes during login process
    const login=async(data)=>{//this data will hold the form data(email and password) when form is submitted
        setError("");
        try {
            const session= await authService.login(data.email,data.password);
            if(session){
                const userData=await authService.getCurrentUser();
                if(userData){
                dispatch(authLogin({userData}));//that's the reason while importing login action from authSlice we are nmaing it as authLogin to avoid confusion with this login function
            navigate("/");}
            }            
        } catch (error) {
            setError(error.message);
            
        }}
  return (
     <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup" // we r navigating to signup component on clicking this link and the path is defined in App.jsx
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input label="Email" type="email" placeholder="Enter your email"
                 //syntax for refister is register("fieldName",{validationRules})
                {...register("email",{required:true,
                validate:{
                    matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",/*regex for email validation and we have used (or) condition that if regex fails then it will return the message*/
                    }})}/>

                <Input label="password" type="password" placeholder="Enter your password"
                {...register("password",{required:true,
                minLength:{//minLength is a validation rule to check minimum length of password
                    value:6,
                    message:"Password must be at least 6 characters long"
                }})}/>
                <Button type="submit" className="w-full">Sign in</Button>
            </div>
        </form>
        </div>
        </div>
  )
}

export default Login