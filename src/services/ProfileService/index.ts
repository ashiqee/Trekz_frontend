'use server'



import { getCurrentUser } from "../AuthService";

import axiosInstance from "@/lib/AxiosInstance"; 





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
