'use server'



import axiosInstance from "@/lib/AxiosInstance"; 

export const getOtherUserData = async (userId:string) => {
    
    console.log(userId);
    

  try {
    const { data } = await axiosInstance.get(`/profile/${userId}`);
  
  
    
    return data;
  } catch (error: any) {
    
    throw new Error(error.response?.data?.message || error.message || "Error fetching user data");
  }
};
