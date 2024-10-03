import { FieldValues } from "react-hook-form"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"

import { loginUser, registerUser } from "@/services/AuthService";
import { useRouter } from "next/navigation";








export const useUserRegistration =()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey: ['USER_REGISTRATION'],
        mutationFn: async (userData)=> await registerUser(userData),
        onSuccess:(res)=>{
                     
            toast.success(res.message);
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
};


export const useUserLogin = ()=>{
    return useMutation<any,Error,FieldValues>({
        mutationKey:["USER_LOGIN"],
        mutationFn: async (userData)=> await loginUser(userData),
        onSuccess:(res)=>{
            if (res.success) {
                toast.success(res.message);
                return res;
              } else {
                toast.error(res.message); // Show error message if `success` is false
                throw new Error(res.message); // Throw an error to trigger `onError` in useMutation
              }
        },
        onError:(error)=>{
            toast.error(error.message)
        },
    });
};