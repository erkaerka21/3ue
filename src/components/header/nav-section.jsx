import Menu from "./menu";
import NavButtons from "./nav-buttons";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import MobileMenuModal from "./mobileMenuModal";

const NavSection = () => {
  const [Opened, setOpened] = useState(0);

  console.log("123 darsan too", Opened);
  return (
    <>
      <div className="hidden md:flex gap-6 items-center">
        <Menu />
        <NavButtons />
      </div>
    </>
  );
};

export default NavSection;
