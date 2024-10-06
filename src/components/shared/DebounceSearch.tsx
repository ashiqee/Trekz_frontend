"use client"
import { Input } from '@nextui-org/input';
import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import {
    SearchIcon,
   
  } from "@/components/icons";
import useDebounce from '@/hooks/debounce.hook';
import { useSearchItems } from '@/hooks/search.hook';
import { ISearchResult } from '@/types';
import SearchPostModal from '../modal/SearchModal';






const DebounceSearch = () => {
    const {mutate:handleSearch,data,isPending,isSuccess}= useSearchItems()
    const {register,handleSubmit,watch,reset}= useForm()
    const [ searchResult,setSearchResult]=useState<ISearchResult[]|[]>([])
    

   const postsData = data?.data;
    console.log(postsData);
    
const searchTerm = useDebounce(watch('search'))

    useEffect(()=>{
        if(searchTerm){
            handleSearch(searchTerm)
        }
    },[searchTerm])

    const onSubmit: SubmitHandler<FieldValues>=(d)=>{
            
            
    }

    useEffect(()=>{
        if(!searchTerm){
            setSearchResult([])
        }

        if(!isPending && isSuccess && data && searchTerm){
            setSearchResult(postsData ?? [])
        }
    },[isPending,isSuccess,data,searchTerm])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            {...register("search")}
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
        
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
    </form>

{searchResult.length>0 && <SearchPostModal reset={reset} postData={postsData} setIsOpen={setSearchResult}/>}
        </div>
    );
};

export default DebounceSearch;