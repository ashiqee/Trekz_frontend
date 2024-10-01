"use server";

import { FieldValues } from "react-hook-form";
import { revalidateTag } from "next/cache";

import { getCurrentUser } from "../AuthService";

import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/config/envConfig";
import nexiosInstance from "@/config/naxios.config";
import { redirect } from "next/navigation";


export const createAPost = async (formData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post<any>(
      "/posts/create-post",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    revalidateTag("posts");

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllPosts = async () => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/posts`, fetchOptions);

  return res.json();
};

export const getMyPosts = async () => {
  const user = await getCurrentUser();

  try {
    let fetchOptions = {};

    fetchOptions = {
      cache: "no-store",
    };

    const { data } = await axiosInstance.get(
      `/posts/my/${user?._id}`,
      fetchOptions
    );

    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Error fetching user post data"
    );
  }
};

export const upVotetodB = async (postId: any) => {
  const user = await getCurrentUser();

  if(!user){
    redirect('/login')
  }
  
  const upVotedata = {
    userId: user?._id,
    postId,
  };

  try {
    const { data } = await nexiosInstance.put("/posts/upvote", upVotedata,{
      cache:"no-store"
      
    });

    revalidateTag('posts')

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const downVotetodB = async (postId: any) => {
  const user = await getCurrentUser();

  if(!user){
    redirect('/login')
  }
  
  const downVotedata = {
    userId: user?._id,
    postId,
  };

  try {
    const { data } = await nexiosInstance.put("/posts/downvote", downVotedata,{
      cache:"no-store"
      
    });

    revalidateTag('posts')

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
