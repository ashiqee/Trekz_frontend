import { Button } from '@nextui-org/button';
import React from 'react';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";

import TRForm from '@/components/forms/TRFrom';
import TRInput from '@/components/forms/TRInput';
import registrationValidation from '@/schemas/register.schema';


const RegistrationForm = () => {


    
    const onSubmit = async (data:any)=>{

const userData ={
    ...data,
    profilePhoto:"asda"
}

        console.log(userData);
        
    }


    return (
        <TRForm
   
        //! Only for development
    defaultValues={{
      name: "Ashiqee",
      email: "ashiqee@gmail.com",
      mobileNumber: "01614654397",
      password: "123456",
    }}
    resolver={zodResolver(registrationValidation)}
    onSubmit={onSubmit}>

<div className='py-3'> <TRInput  isRequired label='Full Name' name='name' type='text'/></div>
<div className='py-3'>     <TRInput isRequired label='Mobile' name='mobileNumber'/></div>
<div className='py-3'> <TRInput isRequired label='Email' name='email' type='email'/></div>
<div className='py-3'> <TRInput isRequired label='Password' name='password' type='password'/></div>

         <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" type='submit'>
                  Registration
                  </Button>
                </div>
<p className="text-center text-small py-2">
                  Already have an account?{" "}
                  <Link className='text-blue-700 hover:text-blue-500' href={'/login'}>
                    Login
                  </Link>
                </p>
    
         
      </TRForm>
    );
};

export default RegistrationForm;