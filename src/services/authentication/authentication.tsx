import firestore from '@react-native-firebase/firestore';
import { ICreateUserRequest } from '../../interfaces/ICreateUserRequest';
import CryptoJS from 'crypto-js';


export const createNewUser = async (data:ICreateUserRequest)=> {
    const {email,phone,password} = data;
    try{
        const querySnapshot = await firestore().collection('users').where('email' , '==',email).get().then(emailQuery=>{
            if(emailQuery.empty){
                return firestore().collection('users').where('phone','in',[phone]).get();
            }
            return emailQuery;
        });
        if(!querySnapshot.empty){
            return {success:false , message:'Email or phone number already exists'};
        };
        const hashedPassword = CryptoJS.SHA256(password).toString();
        const response = await firestore().collection('users').add({...data,  password:hashedPassword});
        if(response?.id){
            return {success:true,message:'Account created successfully'};
        };
    }catch(error){
        return {success:false , message:error};
    };
};


export const signInUser = async (data:{username:string , password:string})=> {
    const {username , password} = data;
    try{
        const querySnapshot = await firestore().collection('users').where('email','==',username).get();
        if(querySnapshot.empty){
            return {success:false , message:'You don\'t have an account, create a new account to login'}
        };
        
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        const hashedPassword = CryptoJS.SHA256(password).toString();
    
        if (hashedPassword === userData.password) {
          return { success: true, message: 'Login successful' };
        } else {
          return { success: false, message: 'Invalid password' };
        }
    }catch(error){
        console.log(error);
        return { success: false, message: 'An error occurred during sign-in' };
    };
};