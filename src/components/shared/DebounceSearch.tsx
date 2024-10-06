import { Input } from '@nextui-org/input';
import React, { useEffect } from 'react';

import {
    SearchIcon,
   
  } from "@/components/icons";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useDebounce from '@/hooks/debounce.hook';
import { useSearchItems } from '@/hooks/search.hook';

const DebounceSearch = () => {
    const {mutate:handleSearch,data}= useSearchItems()
    const {register,handleSubmit,watch}= useForm()
     

    console.log(data);
    
const searchTerm = useDebounce(watch('search'))

    useEffect(()=>{
        if(searchTerm){
            handleSearch(searchTerm)
        }
    },[searchTerm])

    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
            console.log(data);
            
    }

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
        </div>
    );
};

export default DebounceSearch;