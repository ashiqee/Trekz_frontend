"use client";
import { Button } from "@nextui-org/button";
import { ArrowLeft, Eye, EyeOff, Key } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import TRInput from "@/components/forms/TRInput";
import TRForm from "@/components/forms/TRFrom";

const PasswordNSecurity = () => {
  const [showPassword, setShowPaswword] = useState<boolean>(false);
  const [msg,setMsg]=useState('')
  const [passwordData, setPasswodcheck] = useState<{
    password: string;
    confirmPassword: string;
  }>({
    password: "",
    confirmPassword: "",
  });

//   const handleConfirmPassword = async ()=>{
//     const {passwordData,confirmPassword}=passwordData;
//     if(password !== confirm){
//         setMsg("confirm password does'nt matched")
//     }
//   }

  const handleSendPassword = (data) => {
    console.log(data);
  };

  return (
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
              name="password"
              size="sm"
              type={showPassword ? "text" : "password"}
            />
          </div>
          <div className="py-3">
            <TRInput
              label="confirm password"
              name="password"
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
  );
};

export default PasswordNSecurity;
