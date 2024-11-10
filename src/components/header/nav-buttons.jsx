import Link from "next/link";

const NavButtons = () => {
  return (
    <div className="flex border-l border-gray-400 gap-x-6 items-center">
      {/* <MdModeNight className="text-3xl text-gray-600 ml-6" /> */}
      <Link href="https://docs.google.com/document/d/1M0y35qpIF_c4XepoYrNXu4-_GtVlIDjn/edit?usp=sharing&ouid=101328396964702260163&rtpof=true&sd=true">
        <button className="py-[6px] px-4 bg-black text-white rounded-xl ml-5 min-xl:text-3xl">
          Намтар татах холбоос
        </button>
      </Link>
    </div>
  );
};

export default NavButtons;
