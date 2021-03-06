import "screen/OpenlabDetailPage/styles/OpenlabReply.css";
import Reply from "screen/OpenlabDetailPage/components/Reply";
import { useState } from "react";

const replies = [
  {
    emoji: "π",
    name: "κΉμ§λ―Ό",
    content: "ν¬λ‘λ© μ°κ΅¬μ€ λ©μ§λλ€.",
    date: "2021-10-13οΈ",
  },
  {
    emoji: "π©",
    name: "κΉμ±μ",
    content: "νμ΄ν!",
    date: "2021-10-12",
  },

  {
    emoji: "π°",
    name: "λ°μ°¬μ§",
    content: "μΉκ°λ° μ λ¬Έμ μΌλ‘ νμ΅ν  μ μλ μ°κ΅¬μ€μλλ€.",
    date: "2021-10-10",
  }
];

const OpenlabReply = () => {
  const [input, setInput] = useState("");

  const inputChange = (event) => {
    const {
      target: { value },
    } = event;
    setInput(value);
  };

  return (
    <div className="reply-container">
      <div className="reply-title">
        <span>λκΈ</span>
      </div>
      <hr />
      <div>
        <textarea
          className="input-area"
          onChange={(event) => inputChange(event)}
        ></textarea>
      </div>
      <div className="btn-position">
        <button className="transmission-input" onClick={console.log(`click!`)}>
          μ μ‘
        </button>
      </div>
      <div>
        <Reply replies={replies} />
      </div>
    </div>
  );
};
export default OpenlabReply;
