"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { Camera, Images, Smile } from "lucide-react";

const CreateNewPostModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className="w-full p-5 space-y-4 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onOpen();
          }
        }}
      >
        <p>Create New Post</p>
        <p className="p-2 rounded-xl border dark:bg-slate-700/75 bg-sky-100/45 min-w-5xl w-full">create new post</p>

        <div className="flex text-sm gap-2 items-center md:gap-8">
           <p className="flex items-center hover:bg-slate-600/45 rounded-md px-2 p-1"> <Images className="text-green-600" /> Photo/video</p>
           <p className="flex items-center  hover:bg-slate-600/45 rounded-md px-2 p-1"> <Smile className="text-yellow-600"/> Feeling/Activity</p>
           <p className="flex items-center  hover:bg-slate-600/45 rounded-md px-2 p-1"> <Camera className="text-red-600" /> Live Stream</p>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create New Post
              </ModalHeader>
              <ModalBody>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNewPostModal;
