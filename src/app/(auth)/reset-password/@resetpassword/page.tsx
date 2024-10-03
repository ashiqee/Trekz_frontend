"use client"
import { ArrowBigRight, ArrowLeft, Key } from 'lucide-react';
import React from 'react';

import TRForm from '@/components/forms/TRFrom';
import TRInput from '@/components/forms/TRInput';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';


const ResetPassword = () => {

    const handleSendPassword=()=>{

    }

    return (
        <div className='border border-slate-500/45 shadow-md text-center rounded-xl bg-slate-600/5 p-10'>
          
          <div className='flex p-5  mb-5 flex-col justify-center items-center'>
          <Key size={30}/>

<h2 className="text-2xl " >Forgot password?</h2>
<small>no worries! we are here!</small>

          </div>
          <TRForm onSubmit={handleSendPassword}>
            <TRInput size='sm' label='Email' name='email' type='email' />
            <Button className="my-4"  fullWidth size='sm'>Reset pasword</Button>
          </TRForm>

          <Link href={"/login"}><ArrowLeft/>Back to login in</Link>
          </div>
    );
};

export default ResetPassword;