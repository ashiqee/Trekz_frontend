'use client'
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Delete, Edit, Ellipsis } from 'lucide-react';
import EditPostModal from '@/components/modal/EditPostModal';

const PostActionDropDown = ({postDetails,setIsModalOpen}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)} 
    >
      <DropdownTrigger
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="rounded-full hover:bg-slate-800/45 px-2">
          <Ellipsis className="text-blue-800" />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Post Actions"
        onMouseEnter={() => setIsOpen(true)} 
        // onMouseLeave={() => setIsOpen(false)} 
      >
         <DropdownItem
            key="edit"
            description="Allows you to edit the file"
             startContent={<Edit  />}
             onClick={()=>setIsModalOpen(true)}
          >
        Edit
          </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          description="Permanently delete the file"
          startContent={<Delete className={"text-danger"} />}
        >
            Delete post
            </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PostActionDropDown;
