import React,{useCallback,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { RTE, Input, Button, Select } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {
    register, handleSubmit,
    setValue,getValues, watch,control// this setValue is used to set the value of a particular field programmatically and getValues is used to get the current values of the form fields and watch is used to watch the changes in the form fields and control is used to control the RTE component
    }=useForm({defaultValues:{
        title :post?.title||"",
        slug: post?.slug ||"",
        content: post?.content||"",
        status: post?.status||"active",

    }});
    const navigate=useNavigate();
    const userData=useSelector((state)=>state.auth.userData);//getting the user data from the redux store to get the userId while creating a post
    const submit=async(data)=>{// purpose of creating submit function is to handle the form submission for both creating a new post and updating an existing post based on whether a post prop is passed to the PostForm component or not
        

        if(post){//if a post exists then we are updating the post
            const file= data.image[0]?await appwriteService.uploadFile(data.image[0]):null;//these are present in the form of array that's why we are taking first element
            if(file){
                appwriteService.deleteFile(post.featuredImage);//deleting the previous file if user has uploaded a new file
            }
            const dbPost=await appwriteService.updatePost(post.$id,{...data,
            featuredImage:file?file.$id:undefined,});//if file is uploaded then we will send the new file id otherwise we will not send anything so that previous file remains intact
            if(dbPost){
               navigate(`/post/${dbPost.$id}`);
            }        
        }else{// this is the case of creating a new post
            const file= await appwriteService.uploadFile(data.image[0]);//these are present in the form of array that's why we are taking first element
            if(file){
                const fileId=file.$id;
                data.featuredImage=fileId;//replacing the file object with fileId to store in database
                const dbPost=await appwriteService.createPost({...data,
                userId:userData.$id});
                if(dbPost){
                   navigate(`/post/${dbPost.$id}`);
                }
            }
        }

    }
    //this slugTransform function will convert the title to slug automatically while user types the title and this is important for SEO stands for search engine optimization which means making your content easily discoverable by search engines like google so having a good slug structure helps in better ranking of your post in search results
    const slugTransform= useCallback((value)=>{
        // if(value && typeof value==="string"){ 
        //     const slug=value.toLowerCase().replace(/ /g,"-")// replacing spaces with hyphens
        //     .replace(/[^\w-]+/g,"");//removing special characters except hyphen
        //     setValue("slug",slug);
        //     return slug;
        // }
        //another way for above code
        if(value&&typeof value==="string"){
            return value.toLowerCase().trim().replace(/[^a-z0-9\s]+/g,"-")//this will convert spaces to hyphens and also remove special charactersexcept the negated ones
            .replace(/\s/g,"-");//this will replace multiple spaces with single hyphen
        }
        return "";
    },[]);
    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if(name==="title"){
                const slug=slugTransform(value.title,{shouldValidate:true});
                setValue("slug",slug);
            }            
        })
        return ()=>subscription.unsubscribe();
    },[watch,slugTransform,setValue]);//watch means whenever there is a change in any field of the form this watch will trigger and inside it we will call slugTransform to update the slug field accordingly
    return (
     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}// this active and inactive will ensure 
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm