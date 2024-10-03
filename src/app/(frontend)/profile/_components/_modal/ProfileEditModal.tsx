// 'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Edit } from "lucide-react";
import React from "react";

import TRForm from "@/components/forms/TRFrom";
import TRInput from "@/components/forms/TRInput";
import { useUser } from "@/context/user.provider";
import { updateProfile } from "@/services/ProfileService";

const ProfileEditModal =  ({myProfileData}) => {
 const {user}=useUser()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();




  const handleProfileEdit = (data) => {
    updateProfile(data);
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
          {(onClose) => (
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
