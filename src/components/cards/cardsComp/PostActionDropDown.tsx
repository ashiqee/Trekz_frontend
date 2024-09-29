'use client'
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Delete, Edit, Ellipsis } from 'lucide-react';

const PostActionDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)} // Handle opening/closing from other triggers as well
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
        onMouseEnter={() => setIsOpen(true)}  // Keep the dropdown open while hovering over it
        onMouseLeave={() => setIsOpen(false)} // Close the dropdown when the mouse leaves
      >
         <DropdownItem
            key="edit"
            description="Allows you to edit the file"
             startContent={<Edit  />}
          >
            Edit file
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
