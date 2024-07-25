const ExperiencesCart = ({ companyLogo, title, jobRoles, date }) => {
  return (
    <div className="flex justify-between w-[896px] p-5 bg-white drop-shadow-2xl rounded-lg mb-10">
      <div className="flex-1">
        <img src={companyLogo} alt="logo1" />
      </div>
      <div className="flex-1">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <ul className="list-disc ml-6 text-gray-600">
          {jobRoles.map((role) => (
            <li>{role}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 text-right">
        <p>{date}</p>
      </div>
    </div>
  );
};
export default ExperiencesCart;
