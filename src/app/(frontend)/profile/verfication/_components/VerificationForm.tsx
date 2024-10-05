'use client'


import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';



import { createPremiumUser} from '@/services/ProfileService';

interface PaymentFormInputs {
  plan: 'premium' | 'gold' | 'platinum';
}


const VerificationForm = () => {

    const router = useRouter()
    const { register, handleSubmit } = useForm<PaymentFormInputs>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
  
   
  
  
    const onSubmit: SubmitHandler<PaymentFormInputs> = async (data) => {
      setLoading(true);
      setError(null);
  
    const res = await createPremiumUser(data)
  
    
    
    if (res.success) {
      setLoading(false)
      toast.success(res.message);
      router.push(res.data.payment_url)
    }
      
    };

    return (
        <div className=" p-8  px-10 mt-12 
        border border-blue-700/25
        shadow-blue-700/45  rounded-md hover:bg-slate-700/35 bg-slate-700/25 shadow-md w-full max-w-xl">
          <h1 className="text-2xl font-semibold mb-6 text-center">Upgrade to Premium</h1>
  
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block mb-2 font-medium" htmlFor='plan'>Select Plan</label>
            <select
              {...register('plan', { required: true })}
              className="w-full border border-gray-300 p-2 rounded mb-4"
            >
              
              <option value="premium">Premium - $99.99/year</option>
              <option value="gold">Gold - $199.99/year</option>
              <option value="platinum">Platinum - $299.99/year</option>
            </select>
  
            <button
              className={`w-full bg-blue-600 text-white p-2 rounded ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
              disabled={loading}
              type="submit"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </form>
        </div>
    );
};

export default VerificationForm;