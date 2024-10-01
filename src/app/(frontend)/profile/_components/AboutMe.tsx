import { Image } from '@nextui-org/react';
import React from 'react';

import { useUser } from '@/context/user.provider';

const AboutMe = () => {
    const {user}=useUser()

    return (
        <div className="  p-4 bg-sky-900/25 dark:bg-slate-800/45 rounded-md">
          {/* details  */}
          <section>
            <div className='flex items-center justify-between'>
            <h3>About Me</h3>
            <button>Edit Profile</button>
            </div>

            <div className='space-y-3'>
                 <Image src='s' />
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <p>Mobile: {user?.mobileNumber}</p>
                <p>Role: {user?.role}</p>
                <p>Verification Status: {user?.isVerified ? "Verified":"Not Verify"}</p>
            </div>
          </section>
        </div>
    );
};

export default AboutMe;