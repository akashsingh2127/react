import React,{useState,useEffect} from 'react'
import { Containers,PostCard } from '../components'//here we are importing PostCard because we will show all posts in the form of PostCard and why not PostForm because PostForm is used to create or update a post not to show a post
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        appwriteService.getPosts().then((post)=>{
        if(posts){
            setPosts(post.documents);
        }
    }).catch((error)=>{
        console.log("Error while fetching posts",error);
    });
    }
    ,[])
    
  return (
    <div className='w-full py-8'>
        <Containers>
            <h1 className='text-3xl font-bold mb-8'>All Posts</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {posts.map((post)=>(
                    <div key={post.$id}>
                        <PostCard slug={post.$id} title={post.title} featuredImage={post.featuredImage}/>
                    </div>
                ))}
            </div>
        </Containers>
    </div>
  )
}

export default AllPosts