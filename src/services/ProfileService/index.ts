'use server'



import nexiosInstance from "@/config/naxios.config";
import { getCurrentUser } from "../AuthService";

import axiosInstance from "@/lib/AxiosInstance"; 
import { revalidateTag } from "next/cache";





export const getMyUserData = async () => {
    const user = await getCurrentUser()

  try {
    const { data } = await axiosInstance.get(`/users/${user?._id}`);
  
    return data;
  } catch (error: any) {
    
    throw new Error(error.response?.data?.message || error.message || "Error fetching user data");
  }
};



export const getOtherUserData = async (userId:string) => {
  
    

  try {
    const { data } = await axiosInstance.get(`/profile/${userId}`);
  
  
    
    return data;
  } catch (error: any) {
    
    throw new Error(error.response?.data?.message || error.message || "Error fetching user data");
  }
};



// profil update 

export const updateProfile = async (data:{name:string,mobileNumber:string}) => {
  const user = await getCurrentUser()

  const formData = {
    ...data,
    userId: user?._id

  }

try {
  const {data} = await nexiosInstance.put(`/profile`,formData);

    revalidateTag("user")

 return  data;

} catch (error: any) {
  
  throw new Error(error.response?.data?.message || error.message || "Error fetching user data");
}
};