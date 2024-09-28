"use client"
import React, { ReactNode } from 'react';
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure, Button} from "@nextui-org/react";

const NotificationModal = ({icon}:{icon:ReactNode}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
        <button className='mt-1.5' onClick={onOpen}>{icon}</button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Noticfication</ModalHeader>
                <ModalBody>
                  <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                   
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

export default NotificationModal;