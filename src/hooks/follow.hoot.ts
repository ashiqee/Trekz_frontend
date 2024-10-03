import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { addFollowing, removeFollowing } from "@/services/FollowService";


export const useAddFollow =()=>{
    // const queryClient = useQueryClient();

    return useMutation<any,Error,string>({
        mutationKey: ['user'],
        mutationFn: async (followId:string)=> await addFollowing(followId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
            // queryClient.invalidateQueries(['user']); // Adjust to your relevant cache key
            // queryClient.invalidateQueries(['followers']); 
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};

export const useUnFollow =()=>{
    // const queryClient = useQueryClient();
    
    return useMutation<any,Error,string>({
        mutationKey: ['user'],
        mutationFn: async (followId:string)=> await removeFollowing(followId),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
    //         queryClient.invalidateQueries(['user']); // Adjust to your relevant cache key
    //   queryClient.invalidateQueries(['followers']); 
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};