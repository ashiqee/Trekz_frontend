
import React from "react";
import { Card, CardHeader, CardBody, Image, Button, Spinner, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { Star, Verified } from "lucide-react";
import { addFollowing, removeFollowing } from "@/services/FollowService";
import { getCurrentUser } from "@/services/AuthService";
import { toast } from "sonner";
import FollowAction from "./FollowAction";
import { useAddFollow, useUnFollow } from "@/hooks/follow.hoot";
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";


interface Ifollow {
  _id: string;
  name: string;
  profilePhoto: string;
  isVerified:boolean;
}

interface FollowCardProps {
  data: Ifollow;
  isFollower:boolean;
}

const FollowCard =  ({ data,isFollower }: FollowCardProps) => {
  const {mutate:addFollow,isPending}= useAddFollow()
  const {mutate:unFollow,isPending:isUnFollowPending}= useUnFollow()
  

  
  const handleAddFollow = ()=>{
      addFollow(data._id)
     
  }

  const handleUnFollow= ()=>{
   
    unFollow(data._id)
    
  }

  return (
    <>
   
    <Card key={data._id} className="py-3 bg-slate-600/35">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <Link href={`/profile/${data._id}`}>  <p className="text-tiny flex gap-1 uppercase font-bold">
        
        {data.name}
        
        {data.isVerified && <Tooltip content="Verified"><span className="text-blue-500"><Verified size={14}  /></span></Tooltip>} 
        </p> </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <Link href={`/profile/${data._id}`}> 
        <Image
          alt="Card background"
          className="object-cover h-48  rounded-xl"
          src={data.profilePhoto}
          width={140}
        />
         </Link>
        <div className="mt-3 text-center">

         
       {!isFollower ? 
       <Button color="primary" size="sm" onPress={()=>handleAddFollow()}>
        {isPending ? <><Spinner className="size-2"  />Following...</> : <><Star size={12}/>Follow</>}
         </Button>
       :

       <Button color="secondary" size="sm" onPress={()=>handleUnFollow()}>
        
        {isUnFollowPending ? <><Spinner className="size-2"  />Unfollowing...</>
        :
        <><Star size={12}/> UnFollow</>
        }
        </Button>
       } 
        </div>
      </CardBody>
    </Card>
   
    </>
  );
};

export default FollowCard;
