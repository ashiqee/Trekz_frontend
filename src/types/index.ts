import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface IInput {
  variant?: "flat"|"bordered"|"faded"|'underlined';
  size?:"sm"| "md" | "lg";
  isRequired?:boolean;
  type?:string;
  label?:string;
  name:string;
  disable?:boolean;
}


export interface IUser{
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified:boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IComment {
  user: string;
  post: string;
  commentText: string;
 }

export interface IPost  {
  user: string;
  postContent?: string;
  video?: string;
  images?: string[];
  isPremium: boolean;
  upVotes: string[]; 
  downVotes: string[]; 
  comments: IComment[];
  
}

