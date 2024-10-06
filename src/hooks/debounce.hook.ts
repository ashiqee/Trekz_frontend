import { useEffect, useState } from "react"



const useDebounce = <T>(value: T,delay =500)=>{
    const [debounchedValue, setDebouncedValue]=useState<T>(value)



    useEffect(()=>{
            const timer = setTimeout(()=>{
                setDebouncedValue(value);
            },delay);

            return()=>{
                clearTimeout(timer);
            };
    },[value,delay])

    return debounchedValue;
};


export default useDebounce;