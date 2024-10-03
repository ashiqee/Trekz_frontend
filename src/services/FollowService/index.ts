'use server'

import { revalidateTag } from "next/cache";
import { getCurrentUser } from "../AuthService";

import nexiosInstance from "@/config/naxios.config";
import axiosInstance from "@/lib/AxiosInstance";


export const addFollowing = async (followId:string) => {
    const user = await getCurrentUser()


  try {
    const {data} = await nexiosInstance.put(`/follow/add`,{userId:user?._id,
      followId:followId});

      revalidateTag("user")
 
   return  data;
  
  } catch (error: any) {
    
    throw new Error(error.response?.data?.message || error.message || "Error fetching user data");
  }
};

export const removeFollowing = async (followId:string) => {
    const user = await getCurrentUser()


  try {
    const {data} = await nexiosInstance.put(`/follow/remove`,{userId:user?._id,
      followId:followId});
 
      revalidateTag("user")

   return  data;
  
  } catch (error: any) {
    
    throw new Error(error.response?.data?.message || error.message || "Error fetching user data");
  }
};
