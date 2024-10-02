'use client'
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Delete, Edit, Ellipsis } from 'lucide-react';

const CmntActionDropDown = ({cmntId}:{cmntId:string}) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleEditCnmt = ()=>{
        alert(cmntId)
  }
  const handleDeleteCnmt = ()=>{
    alert(cmntId)
  }

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
          <Ellipsis className="text-blue-800" size={12} />
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
             onClick={handleEditCnmt}
          >
            Edit comment
          </DropdownItem>
        <DropdownItem
        key="delete"
          className="text-danger"
          color="danger"
          description="Permanently delete the file"
          startContent={<Delete className={"text-danger"} />}
          onClick={handleDeleteCnmt}
        >
            Delete comment
            </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CmntActionDropDown;
