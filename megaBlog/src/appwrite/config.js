import conf from "../conf/conf";
import { Client, ID, Databases,Storage, Query} from "appwrite";

class Service{
    client= new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    // these r the attributes we have created inside the collection in appwrite dashboard
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            //syntax is createDocument(databaseId,collectionId,documentId,data,permissions) and the last argument is an object
            //slug has been assigned as documentId to make it unique
            return await this .databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userId
            });
        } catch (error) {
            throw error;
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        //we will only give the edit option to the user who is updating so we removed userId from here
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status
            })
        } catch (error) {
            throw error;
        }

    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
            return true;
            
        } catch (error) {
            throw error;
            return false;
        }
    }
    async getPost(slug){
        try {
           return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
        } catch (error) {
            throw error;            
        }

}
async getPosts(queries=[Query.equal("status","active")]){
    // by default only active posts will be shown and we can only take the indexes created in appwrite dashboard & if indexes not created u can't perform queries on that attribute
    try {
         return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries); 
    } catch (error) {
        throw error;
    }
}
 async uploadFile(file){//in the argument we have to give the (actual file) not the name of it
    try {
        return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file);         
    } catch (error) {
        throw error;
    }

 }
 async deleteFile(fileId){
    // we get the fileId when we upload the file
    try {
        await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
        return true;
    } catch (error) {
        throw error;
        return false;
    }
}
 getFilePreview(fileId){
    //directly we get the url of the file therefore we don't need to make this method async
    return this.bucket.getFilePreview(conf.appwriteBucketId,fileId);
 }
}

const authService = new Service();
export default authService;