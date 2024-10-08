import {  useMutation,  } from "@tanstack/react-query";
import { toast } from "sonner";

import { downVotetodB, upVotetodB } from "@/services/PostService";




export const useAddUpVote =()=>{
  

    return useMutation<any,Error,string>({
        mutationKey: ['post'],
        mutationFn: async (postId:string)=> await upVotetodB(postId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
         
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};

export const useDownVote =()=>{
  
    
    return useMutation<any,Error,string>({
        mutationKey: ['user'],
        mutationFn: async (postId:string)=> await downVotetodB(postId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
   
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};