import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { createAComment, createAPost, downVotetodB, updateAPost, upVotetodB } from "@/services/PostService";
import { IPost } from "@/types";


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

export const useUpdatePost =()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey: ['post'],
        mutationFn: async (postData)=> await updateAPost(postData),
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


// comment hook 


export const useCreateComment =()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey: ['post'],
        mutationFn: async (commentData)=> await createAComment(commentData),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};

