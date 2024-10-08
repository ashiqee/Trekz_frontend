import React from 'react';

import { useUser } from '@/context/user.provider';

const AboutMe = ({about}:{about:any}) => {
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
                 
                <p>Name: {about?.name}</p>
                <p>Email: {about?.email}</p>
                <p>Mobile: {about?.mobileNumber}</p>
                <p>Role: {about?.role}</p>
                <p>Verification Status: {about?.isVerified ? "Verified":"Not Verify"}</p>
            </div>
          </section>
        </div>
    );
};

export default AboutMe;