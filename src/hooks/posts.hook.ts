import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { createAPost } from "@/services/PostService";


export const useCreatePosts =()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey: ['POSTS'],
        mutationFn: async (postData)=> await createAPost(postData),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};