import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";



class AuthService{
    
    client= new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount(email, password,name){ // parameters would be the same in evrery service

        try {
           const userAccount= await this.account.create(ID.unique(), email, password, name);
           //unique id is mandatory to give and same in the order given above
           if (userAccount) {
            //using another method(login) so the moment signUp is finished user will be returned to login page
            return this.login(email, password);
            
           } else {
            return userAccount;
            
           }
        } catch (error) {
            throw error;
            
        }
}
 async login(email, password){
    try {
        return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
        throw error;
    }
 }
 
 async getCurrentUser(){
    try {
       return await this.account.get();//this will return the current logged in user in the form of an object 
    } catch (error) {//when service isn't reached
           if (error.code === 401) {
      return null; // user not logged in (NORMAL case)
    }
    throw error; // real errors 
    }
    return null;// if there is any problem in try catch
 }
 async logout(){
    try {
        // if we want to delete a single session so that can be also done by passing session id in deleteSession method and current inside it 
        return await this.account.deleteSessions();
    } catch (error) {
        throw error;
   }
  }
}
 


const authService = new AuthService();
export default authService;