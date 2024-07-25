const TitlesContainer = ({ sTitle, sP }) => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center mb-12">
      <p className="py-1 px-5 bg-slate-300 rounded-2xl font-medium mb-4">
        {sTitle}
      </p>
      <p>{sP}</p>
    </div>
  );
};
export default TitlesContainer;
