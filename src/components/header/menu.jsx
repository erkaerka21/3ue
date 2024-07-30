const menuList = [
  { label: "Home", link: "/" },
  { label: "About", link: "#about" },
  { label: "Experiences", link: "#experiences" },
  { label: "Work", link: "#work" },
  { label: "Contact", link: "#contact" },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex text-base text-gray-600 gap-x-6">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
