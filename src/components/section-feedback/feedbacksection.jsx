import { useState } from "react";
const FeedbackSection = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const save = () => {
    console.log("EMAIL", email);
    console.log("Сэтгэгдэл", text);
  };
  return (
    <div className="flex flex-col justify-start items-center mt-12 mb-8">
      <label for="email">Цахим шуудан</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label for="text">Санал хүсэлт</label>
      <br />
      <input
        type="text"
        id="text-comment"
        name="text"
        placeholder="санал хүсэлт"
        style={{ height: "100px" }}
        onChange={(event) => setText(event.target.value)}
      />
      <br />
      <button className="bg-violet-300 font-semibold rounded-lg" onClick={save}>
        Илгээх
      </button>
    </div>
  );
};
export default FeedbackSection;
