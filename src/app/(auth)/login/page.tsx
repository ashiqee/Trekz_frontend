"use client";
import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";


import { useUserLogin } from "@/hooks/auth.hook";
import Loading from "@/components/shared/Loading";
import { useUser } from "@/context/user.provider";
import TRForm from "@/components/forms/TRFrom";
import TRInput from "@/components/forms/TRInput";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {setIsLoading:userLoading}= useUser();
  const redirect = searchParams.get("redirect");
  const {mutate:handleLogin,isPending, isSuccess}=useUserLogin();




  const onSubmit:SubmitHandler<FieldValues> = (data: any) => {
  
    handleLogin(data);
    userLoading(true);
   
  };

  useEffect(()=>{
    if(!isPending && isSuccess){
      if(redirect){
        router.push(redirect);
      }else{
        router.push('/')
      }
    }
  },[isPending,isSuccess])

  return (
    <>
    {isPending && <Loading/>}
      <motion.div animate={{ y: [-200, 100, 0] }}>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 "
          shadow="md"
        >
          <CardBody className="p-10 min-w-[40vw] md:p-20 2xl:px-40">
            <div className=" text-center pb-10">
             <Link href={'/'}> <h2 className="text-3xl font-bold uppercase">ASBAR Academy</h2></Link>
              <h3>Login Now</h3>
            </div>

            <TRForm
              //! Only for development
              defaultValues={{
                email: "ashiqee@gmail.com",
                password: "123456",
              }}
              onSubmit={onSubmit}
            >
              <div className="py-3">
                {" "}
                <TRInput isRequired label="Email" name="email" type="email" />
              </div>
              <div className="py-3">
                {" "}
                <TRInput
                  isRequired
                  label="Password"
                  name="password"
                  type="password"
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" type="submit">
                  Login
                </Button>
              </div>
              <p className="text-center  text-small py-2">
                Need to create an account?{" "}
                <Link className="text-primary-700" href={"/register"}>
                  Sign up
                </Link>
              </p>
            </TRForm>
          </CardBody>
        </Card>
      </motion.div>
    </>
  );
};

export default LoginPage;
