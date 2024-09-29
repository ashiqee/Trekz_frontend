import { Button } from '@nextui-org/button';
import React from 'react';
import Link from 'next/link';

import TRForm from '@/components/forms/TRFrom';
import TRInput from '@/components/forms/TRInput';


const RegistrationForm = ({role}:{role:string}) => {


    
    const onSubmit = async (data:any)=>{
const userRole = role;
const userData ={
    ...data,
    userRole,
    profilePhoto:"asda"
}

        console.log(userData);
        
    }


    return (
        <TRForm
        //! Only for development
    defaultValues={{
      full_name: "Ashiqee",
      email: "ashiqee@gmail.com",
      mobileNumber: "01614654397",
      password: "123456",
    }}
    onSubmit={onSubmit}>

<div className='py-3'> <TRInput isRequired label='Full Name' name='full_name' type='text'/></div>
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