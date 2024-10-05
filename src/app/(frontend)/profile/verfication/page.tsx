import FeaturesSection from "./_components/FeaturesSection";
import VerificationForm from "./_components/VerificationForm";
import OverlayPaymentForm from "./_components/OverlayPaymentForm";

import { getMyPosts } from "@/services/PostService";


const PaymentPage = async () => {
  const {data: myPostData}= await getMyPosts()


  const isUpVote = myPostData.some((vote:any)=>vote.upVotes.length)


  return (
    <div className=" flex container mx-auto px-4 flex-col h-full items-center justify-center  p-4">
      {isUpVote ? <VerificationForm/>:
      
      
      <OverlayPaymentForm/> }

      <FeaturesSection/>
    </div>
  );
};

export default PaymentPage;
