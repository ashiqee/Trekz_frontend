import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { createAPost, downVotetodB, upVotetodB } from "@/services/PostService";


export const useCreatePosts =()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey: ['post'],
        mutationFn: async (postData)=> await createAPost(postData),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};

export const useUpvotePost =()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey: ['post'],
        mutationFn: async (postId)=> await upVotetodB(postId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};

export const useDownvotePost =()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey: ['post'],
        mutationFn: async (postId)=> await downVotetodB(postId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};