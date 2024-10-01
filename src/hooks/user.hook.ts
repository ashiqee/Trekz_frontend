import { useQuery } from "@tanstack/react-query"

import { getMyUserData } from "@/services/FollowService"


export const useMyUserData = (id: string) => {
    return useQuery({
      queryKey: ["UserData", id],  
      queryFn: () => getMyUserData(id), 
      enabled: !!id,  
      retry: 1,  
 
      onError: (err: any) => {
        console.error("Error fetching user data:", err);  
      }
    });
  };