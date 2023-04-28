import { axiosPublic } from "../api/axiosPublic";
import {Set,Remove} from '../services/localStorageService';
import mem from "mem";


export const Login =async (values) => { 
    const loginUrl = "/api/Accounts/login";
    return new Promise((resolve,reject)=>{
    axiosPublic({
        method:'post',
        url:loginUrl,
        data:{
            username:values.username,
            password:values.password,
            rememberMe:values.rememberMe
        }
    })
    .then((res)=>{
        resolve(res);
        const {appSession} = res.data;

        if (!appSession?.Token) {
            Remove("token");
            Remove("validDate");
          }

        Set("token", res.data.Token);
        Set("validDate",  res.data.TokenValidDate);
        
    })
    .catch((err)=>{
        reject(err);
        Remove("token");
        Remove("validDate")
    });
    })
}


const maxAge = 10000;

export const memoizedToken = mem(Login, {
  maxAge,
});


export async function  GetCurrentUserByToken(token){ 
    const getUserByTokenUrl = "/api/Accounts/get-user-by-token";
    return new Promise((resolve,reject)=>{
    axiosPublic.get(getUserByTokenUrl,{params:{token:token}})
    .then((res)=>{
        resolve(res);  
    })
    .catch((err)=>reject(err));
    })
}
 