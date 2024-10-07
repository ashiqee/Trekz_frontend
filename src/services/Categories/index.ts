'use server'

import nexiosInstance from "@/config/naxios.config"



export const getCategories = async()=>{
    try{
        const {data}= await nexiosInstance.get('/posts/posts-categories')

        return data;
    }catch(err:any){
        throw new Error(err.message)
    }
}