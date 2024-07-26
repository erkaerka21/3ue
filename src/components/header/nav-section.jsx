import Menu from "./menu";
import NavButtons from "./nav-buttons";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";

const NavSection = () => {
  return (
    <>
      <div className="hidden md:flex gap-6 items-center">
        <Menu />
        <NavButtons />
      </div>
      <button className="md:hidden" onClick={menubar}>
        <TiThMenuOutline />
      </button>
    </>
  );
};

export default NavSection;
