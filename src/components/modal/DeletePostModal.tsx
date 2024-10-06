import React from "react";
import { Button } from "@nextui-org/button";
import { CircleAlert, TrashIcon } from "lucide-react";
import { toast } from "sonner";

import { deletAPost } from "@/services/PostService";

const DeletePostModal = ({
  postId,
  setIsOpen,
}: {
  postId: any;
  setIsOpen: any;
}) => {
  const handleDeletedPost = async () => {
  const res = await  deletAPost(postId);

if(res.success){
    toast.success(res.message)
}else{
    toast.error("something wrong!")
}
  
  };

  return (
    <>
      <div className="fixed   z-40 inset-0 bg-slate-500/35 flex flex-col w-full bg-opacity-75  justify-center items-center ">
        <div className="w-[40vw]">
          <div
            className=" relative  z-40 min-w-3xl max-w-3xl mx-auto max-h-[90vh] my-auto 
         rounded-xl p-10 overflow-hidden overflow-y-auto 
          bg-gray-900  text-white text-center"
          >
            <div className="space-y-2 flex flex-col justify-center items-center">
              <h3 className="text-3xl">Are you sure delete this Post?</h3>
              <p>Please confirm</p>
              <CircleAlert color="red" size={60} />
            </div>

            <div className="flex gap-4 justify-center pt-10">
              <Button color="warning" onPress={() => setIsOpen(false)}>
                No
              </Button>
              <Button color="danger" onPress={handleDeletedPost}>
                <TrashIcon /> Yes Delete it!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePostModal;
