// 'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Edit } from "lucide-react";
import React from "react";
import { toast } from "sonner";

import TRForm from "@/components/forms/TRFrom";
import { updateProfile } from "@/services/ProfileService";
import TRInput from "@/components/forms/TRInput";

const ProfileEditModal =  ({myProfileData}:{myProfileData:any}) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();




  const handleProfileEdit = async (updateData:any) => {
    const formData = new FormData();

   

    formData.append('data', JSON.stringify(updateData));

    // for (let image of images) {
    //   formData.append("profilePhoto", image);
    // }

   
    const data = await updateProfile(formData)

    if(data){
        toast.success("Update your profile successfully")
    }else{
      toast.error("something wrong!")
    }
    
    onOpenChange()
  };

  return (
    <div>
      <Button
        className="absolute right-5 bottom-2 z-40 hover:bg-slate-600/45
           bg-slate-700/45"
        onPress={onOpen}
      >
        <Edit size={14} />
        Edit profile
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Profile
              </ModalHeader>
              <ModalBody>
                <TRForm
                 
                  defaultValues={{
                    name: `${myProfileData?.name}`,
                    mobileNumber: `${myProfileData?.mobileNumber}`,
                   
                  }}
                  onSubmit={handleProfileEdit}
                >
                  <div className="py-3">
                    {" "}
                    <TRInput
                      isRequired
                      label="Full Name"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div className="py-3">
                    {" "}
                    <TRInput isRequired label="Mobile" name="mobileNumber" />
                  </div>
                 
                 

                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary" type="submit">
                      Update
                    </Button>
                  </div>
                </TRForm>
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileEditModal;
