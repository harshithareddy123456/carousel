import "./App.css";
import data from "./assets/data";
import { useState } from "react";

function App() {
  const [isactive, setIsactive] = useState(0);
  const handleright = () => {
    let addisactive = isactive + 1;
    let datalen = data.length - 1;
    if (addisactive > datalen) {
      setIsactive(0);
    } else {
      setIsactive(addisactive);
    }
  };
  const handleleft = () => {
    let addisactive = isactive - 1;
    if (addisactive === -1) {
      setIsactive(data.length - 1);
    } else {
      setIsactive(addisactive);
    }
  };
  return (
    <div className="Container">
      <button className="leftbutton" onClick={handleleft}>
        ⬅️
      </button>
      {data.map((item, index) => (
        <div key={index} className="mainimage">
          {item.id === isactive ? (
            <img
              src={item.src}
              alt={item.alt}
              className={item.id === isactive ? "active" : ""}
            />
          ) : null}
        </div>
      ))}
      <button className="rightbutton" onClick={handleright}>
        ➡️
      </button>
    </div>
  );
}

export default App;
