import { getCategories } from "@/services/Categories"
import { useQuery } from "@tanstack/react-query"


export const useGetCategories =()=>{
    return useQuery({
        queryKey:["categories"],
        queryFn: async ()=> await getCategories()
    })
}