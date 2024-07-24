const ExperiencesCart = () => {
  return (
    <div className="flex justify-between h-56 w-[896px] bg-white drop-shadow-2xl rounded-lg mb-3">
      <div className="flex-1">
        <img src="/experiences-logo1.png" alt="logo1" />
      </div>
      <div className="flex-1">
        <h1 className="font-semibold text-2xl">Sr. Frontend Developer</h1>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
      <div className="flex-1 text-right">
        <p>2024 оны 4 сараас одоог хүртэл</p>
      </div>
    </div>
  );
};
export default ExperiencesCart;
