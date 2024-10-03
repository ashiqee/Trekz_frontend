"use client";
import { Button } from "@nextui-org/button";
import { ArrowLeft, Eye, EyeOff, Key } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import TRInput from "@/components/forms/TRInput";
import TRForm from "@/components/forms/TRFrom";
import { changePassword, logout } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loading from "@/components/shared/Loading";


interface IPassword{
    old_password:string,
     newPassword:string
     confirmPassword:string
}

const PasswordNSecurity = () => {
  const [showPassword, setShowPaswword] = useState<boolean>(false);
  const [msg,setMsg]=useState('')
  const [isPending,setIsPending]=useState(false)
  const router = useRouter()




  const handleSendPassword = async (data:IPassword) => {
    

    const updatePassword = {
        oldPassword:data.old_password,
        newPassword:data.newPassword
    }
   
  
    if(data.newPassword !== data.confirmPassword){

        setMsg("confirm password doesn't matched")
    }else{
        setIsPending(true)
        const res= await changePassword(updatePassword);
        
        setMsg('')
        if(res.success){
            toast.success(res.message)
            logout()
            router.push('/login')
            setIsPending(false)
        }

        
    }
    
        
  };

  return (
   <>
   {isPending && <Loading/> }
    <div className="flex md:py-14 flex-col justify-center items-center">
      <div className="border min-w-xl xl:px-40 mx-auto border-slate-500/45 shadow-md text-center rounded-xl bg-slate-600/5 p-10">
        <div className="flex p-5  flex-col justify-center items-center">
          <Key size={30} />

          <h2 className="text-2xl ">Reset password?</h2>
          <small>no worries! we are here!</small>
        </div>
        <TRForm onSubmit={handleSendPassword}>
          <div className="py-3">
            <TRInput
              label="old password"
              name="old_password"
              size="sm"
              type={showPassword ? "text" : "password"}
              
            />
          </div>
          <div className="py-3">
            <TRInput
              label="new password"
              name="newPassword"
              size="sm"
              type={showPassword ? "text" : "password"}
            />
          </div>
          <div className="py-3">
            <TRInput
              label="confirm password"
              name="confirmPassword"
              size="sm"
              type={showPassword ? "text" : "password"}
            />
            {msg && <small className="text-red-400 py-1">{msg}</small>}
          </div>
          <button
            className="py-2 text-[13px] flex items-center gap-2"
            onClick={() => setShowPaswword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />} Show password
          </button>
          <Button type="submit" fullWidth className="my-2" size="sm">
            Reset pasword
          </Button>
        </TRForm>

        <div>
          <Link className="flex items-center gap-2" href={"/login"}>
            <ArrowLeft />
            Back to login in
          </Link>
        </div>
      </div>
    </div>
   </>
  );
};

export default PasswordNSecurity;
