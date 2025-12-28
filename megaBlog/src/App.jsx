import conf from './conf/conf';
import './App.css'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import authService from './appwrite/auth_service';
import { login, logout } from './features/authSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet} from 'react-router-dom';//work of outlet is to render the child routes inside the parent route component

function App() {
  const [loading,setloading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()// getcurrentuser is a function defined in auth_service.js which returns a promise and if resolved it gives userData else throws error which will be handled by catch
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
        //using this the action of login will be dispatched with userData as payload from auth_service.js
      }else{
        dispatch(logout());
      }
    }).finally(()=>{//in this case finally is used to make loading false whether the promise is resolved or rejected
      setloading(false);
    })
    //until .finally makes loading false the app will keep on showing loading state then the Header and Footer will be shown
    
    
  },[]) 
  //conditional rendering
  return !loading?(
    /*if loading is false then only header and footer will be shown*/
    <div className="min-h-screen  text-3xl font-bold">
      <div className="text-center pt-20">
        <Header/>
         <main>
          <Outlet/>
          </main> 
        <Footer/>
      </div>
    </div>
  ):<div>Loading....</div>
}
{/*in the above code useEffect is used to check whether user is logged in or not by calling getCurrentUser method from auth_service.js which returns a promise and if resolved it gives userData else throws error which will be handled by catch block and right now the output is shown in form of loading until the promise is resolved or rejected*/}
export default App
