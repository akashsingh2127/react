import React,{useState,useEffect} from 'react'
import { Containers,PostCard } from '../components'
import appwriteService from '../appwrite/config'

function Home() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        appwriteService.getPosts().then((post)=>{
            if(posts){
                setPosts(post.documents);
            }
    })}
    ,[])
        if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Containers>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Containers>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Containers>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                            {/* this is to spread all the props of post object to PostCard component. and postcard work is to show a single post in the form of a card but using this spread operator we are passing all the properties of post object as props to PostCard component*/}
                        </div>
                    ))}
                </div>
            </Containers>
        </div>
    )
 
}

export default Home