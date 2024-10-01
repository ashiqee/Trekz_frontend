import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

interface Ifollow {
    _id: string;
    name: string;
    profilePhoto: string;
  }
  
  interface FollowCardProps {
    data: Ifollow;
  }


const FollowCard = ({data}:FollowCardProps) => {
    return (
        <Card key={data._id} className="py-4 bg-slate-600/35">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{data.name}</p>
       
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover  rounded-xl"
            src={data.profilePhoto}
            width={160}
          />
        </CardBody>
      </Card>
    );
};

export default FollowCard;