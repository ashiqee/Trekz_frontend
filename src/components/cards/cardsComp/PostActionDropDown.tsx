import React from 'react';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
  } from "@nextui-org/dropdown";
import { Ellipsis } from 'lucide-react';

const PostActionDropDown = () => {
    return (
        <Dropdown>
        <DropdownTrigger>
          <button className='rounded-full hover:bg-slate-800/45 px-2 '><Ellipsis className='text-blue-800' /></button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem >
            edit
          </DropdownItem>
          <DropdownItem >
            delete
          </DropdownItem>
        
    
        </DropdownMenu>
      </Dropdown>
    );
};

export default PostActionDropDown;