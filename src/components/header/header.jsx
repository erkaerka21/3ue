import NavSection from "./nav-section";
import { TiThMenuOutline } from "react-icons/ti";
import MobileMenuModal from "./mobileMenuModal";
import { useState } from "react";
const Header = () => {
  const [Opened, setOpened] = useState(true);
  return (
    <header className="flex items-center justify-between px-20 py-4">
      <h1 className=" text-3xl font-bold">Эрдэнэсүрэн</h1>
      <NavSection />
      <button
        className="md:hidden"
        onClick={() => setOpened(!Opened)}
        data-bs-toggle="modal"
        data-bs-target="#taskModal"
      >
        <TiThMenuOutline />
      </button>
      <div>{Opened ? <MobileMenuModal /> : <div></div>}</div>
    </header>
  );
};

export default Header;
