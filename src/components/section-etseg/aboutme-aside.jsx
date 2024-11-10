const AboutMeAside = () => {
  return (
    <div style={{ width: "330px", height: "360px" }} className="mt-10 mr-14">
      <div
        className="bg-slate-200"
        style={{ position: "relative", width: "300px", height: "340px" }}
      >
        <img
          src="/pro1.png"
          alt="zurag-intro"
          className="object-cover border-solid border-white border-8"
          style={{
            position: "absolute",
            width: "300px",
            height: "340px",
            bottom: "25px",
            left: "25px",
          }}
        />
      </div>
    </div>
  );
};
export default AboutMeAside;
