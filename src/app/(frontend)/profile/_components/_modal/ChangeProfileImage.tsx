// 'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Input,
  Tooltip,
} from "@nextui-org/react";
import { Camera, ImageUp } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import { toast } from "sonner";

import { useUser } from "@/context/user.provider";
import { updateProfile } from "@/services/ProfileService";


const ChangeProfileImage = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [images, setImage] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImage((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreviews(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImg = async () => {
    const formData = new FormData();
    
    const updateData={}

    formData.append('data', JSON.stringify(updateData));

  

    for (let image of images) {
      formData.append("profilePhoto", image);
    }

    const data = await updateProfile(formData)

    if(data){
        toast.success("Update your profilePhoto successfully")
    }else{
      toast.error("something wrong!")
    }
    
    onOpenChange()
  };

  return (
    <div>
      <Tooltip content="change profile image">
        <Button
          className="absolute  left-24 size-1 bottom-2 z-40 hover:bg-slate-600/45
             bg-slate-700/5"
          size="sm"
          onPress={onOpen}
        >
          <Camera size={20} />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Change Profile Image
              </ModalHeader>
              <ModalBody>
                <div className=" overflow-hidden items-center ">
                  <Image
                    alt="profile"
                    className="object-cover w-full"
                    src={imagePreviews}
                  />
                </div>
                {!imagePreviews && (
                  <>
                    <label
                      className="text-center h-24 text-[10px]  rounded-lg flex mt-2 justify-center items-center w-full bg-slate-400/15"
                      htmlFor="images"
                    >
                      <ImageUp size={14} />
                      Add photo
                    </label>
                    <Input
                      accept="image/*"
                      className="hidden"
                      id="images"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleChangeImg}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChangeProfileImage;
