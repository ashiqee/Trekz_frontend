import React, { ReactNode } from 'react';
import { Sidebar } from './_components/Sidebar';

const BackendLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className='flex gap-4'>
            <Sidebar/>
            {children}
        </div>
    );
};

export default BackendLayout;