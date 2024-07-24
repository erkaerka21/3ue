const skillsList = [
  { src: "../Tech 1.png" },
  { src: "/Tech 2.png" },
  { src: "/Tech 3.png" },
  { src: "/Tech 4.png" },
  { src: "/Tech 5.png" },
  { src: "/Tech 6.png" },
  { src: "/Tech 7.png" },
  { src: "/Tech 8.png" },
  { src: "/Tech9.png" },
  { src: "/Tech10.png" },
  { src: "/Tech11.png" },
  { src: "/Tech12.png" },
  { src: "/Tech13.png" },
  { src: "/Tech14.png" },
  { src: "/Tech15.png" },
  { src: "/Tech16.png" },
];
const Skill = () => {
  return (
    <div className="grid grid-cols-8 grid-rows-2 gap-y-12 gap-x-16">
      {skillsList.map((skill) => {
        return (
          <li className="list-none">
            <img src={skill.src} style={{ height: "100px", width: "88px" }} />
          </li>
        );
      })}
    </div>
  );
};
export default Skill;
