import React from "react";
import { FaHome,FaAddressBook,FaCarrot  } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
export default function App15() {
  return (
    <div>
      <h3>This is App15</h3>
      <div>
        <FaHome size={20} />
        <label>Home</label>
      </div>
      <div>
        <FaAddressBook size={20}/>
        <label>Contact</label>
      </div>
      <div>
        <FaCarrot size={20}/>
        <label>Carrot</label>
      </div>
      <div>
        <AiFillAlert size={20} color="red"/>
        <label>Alert</label>
      </div>
    </div>
  );
}