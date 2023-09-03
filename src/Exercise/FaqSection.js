import { useState } from "react";

export function FaqSection({ text, title, num }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(toggle => !toggle);
  }

  return (
    <div className={`item ${toggle ? "open" : " "}`} onClick={handleToggle}>
      <p className="number"> {num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{toggle ? "-" : "+"}</p>

      {toggle && <div className="content-box">{text}</div>}
    </div>
  );
}
