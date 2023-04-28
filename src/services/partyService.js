import { axiosPublic } from "../api/axiosPublic";
import {axiosPrivate} from "../api/axiosPrivate";

export async function  Create(values){
    const createPartyUrl = "/fa-ir/api/Parties";
    console.log(createPartyUrl);
    return new Promise((resolve,reject)=>{
    axiosPrivate({
        method:'post',
        url:createPartyUrl,
        data:{
            partyName: values.partyName,
            email: values.email,
            cellphone:values.cellphone,
            image: values.image,
            description: values.description,
            nationalIdentificaion: values.nationalIdentificaion,
            balance: values.balance
        }
    })
    .then((res)=>{
        alert('a');
        alert(res);
        debugger;
        resolve(res);
        console.log(res);
    })
    .catch((err)=>reject(err));
    })
}