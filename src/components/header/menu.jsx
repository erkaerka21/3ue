const menuList = [
  { label: "Эцэг өвөө", link: "#uvuu" },
  { label: "Эцэг", link: "#etseg" },
  { label: "Би", link: "#bi" },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex text-base text-gray-600 gap-x-6 min-xl:text-3xl">
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
