import NavSection from "./nav-section";
import { TiThMenuOutline } from "react-icons/ti";
import MobileMenuModal from "./mobileMenuModal";
import { useState } from "react";
const Header = () => {
  const [Opened, setOpened] = useState(true);
  return (
    <header className="flex flex-row items-center justify-between px-20 py-4">
      <h1 className="hidden md:flex text-3xl font-bold min-xl:text-6xl">
        Эрдэнэсүрэн
      </h1>
      <NavSection />
      <button className="md:hidden" onClick={() => setOpened(!Opened)}>
        <TiThMenuOutline />
      </button>
      <div className="md:hidden">
        {Opened ? <MobileMenuModal /> : <div></div>}
      </div>
    </header>
  );
};

export default Header;
