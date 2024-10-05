import { Button } from '@nextui-org/button';
import React from 'react';

const OverlayPaymentForm = () => {
    return (
        <div className=" p-8   px-10 mt-12 
        border border-blue-700/25
        shadow-blue-700/45  rounded-md hover:bg-slate-700/35 bg-slate-700/25 shadow-md w-full max-w-xl">

 
          <h1 className="text-2xl font-semibold mb-6 text-center">Upgrade to Premium</h1>
  
         
  
          <div >
            <label className="block mb-2 font-medium" htmlFor='plan'>Select Plan</label>
            <select
          
              className="w-full border border-gray-300 p-2 rounded mb-4"
            >
              
              <option value="premium">Premium - $99.99/year</option>
              <option value="gold">Gold - $199.99/year</option>
              <option value="platinum">Platinum - $299.99/year</option>
            </select>
  
            <div>
            <h3 className='text-red-500 text-center'>Need at least one upVote</h3>
            </div> 
            <Button
              disabled
              className="w-full disabled:bg-gray-700 bg-blue-600 text-white p-2 rounded"
              type="submit"
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
    );
};

export default OverlayPaymentForm;