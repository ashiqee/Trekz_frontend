"use server";


import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";


import { getCurrentUser } from "../AuthService";

import axiosInstance from "@/lib/AxiosInstance";
import nexiosInstance from "@/config/naxios.config";

export const getMyUserData = async () => {
  const user = await getCurrentUser();

  try {
    const { data } = await axiosInstance.get(`/users/${user?._id}`);

    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Error fetching user data"
    );
  }
};

export const getOtherUserData = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/profile/${userId}`);

    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Error fetching user data"
    );
  }
};

// profil update

export const updateProfile = async (formData:any) => {
  try {
  

    const { data } = await axiosInstance.put(`/profile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',  
      },
    });

    if(data){
      revalidateTag("user")
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};


// payment api 

export const createPremiumUser = async (userData: FieldValues) => {
  try {
    const { data } = await nexiosInstance.post<any>("/profile/subcribe", userData);


    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};