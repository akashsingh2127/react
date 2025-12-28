import React,{useState,useEffect} from 'react'
import{ Containers,PostForm} from '../components'
import { useNavigate } from 'react-router-dom';
import appwriteService from '../appwrite/config'
import {useParams} from 'react-router-dom'//it is used to get the parameters from the url like in edit post we have post id in the url so to get that id we will use useParams hook

function EditPost() {
    const [post,setPost]=useState(null);
    const {slug}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((res)=>{
                setPost(res);
            })
        }else{
            navigate('/');
        }
    },[slug,navigate])

  return post?(
    <div className='py-8'>
        <Containers>
            <PostForm post={post}/>        {/*here post acts as a prop which we r passing to PostForm component so that it can populate the form with existing post data for editing*/}
        </Containers>
    </div>
  ):<div>Loading...</div>
}

export default EditPost