"use server"

import { FieldValues } from "react-hook-form";
import { revalidateTag } from "next/cache";

import axiosInstance from "@/lib/AxiosInstance";
import nexiosInstance from "@/config/naxios.config";
import envConfig from "@/config/envConfig";


export const createAPost = async (formData: FieldValues) => {
 
    try {
      const { data } = await axiosInstance.post<any>("/posts/create-post", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      revalidateTag("posts");
  
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };


 export  const getAllPosts = async ()=>{
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/posts`, fetchOptions);


  
  
  return res.json();
 }