import { Spinner } from '@nextui-org/react';
import React from 'react';

const loading = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <Spinner color="primary" label="Loading..." labelColor="primary"/>
        </div>
    );
};

export default loading;