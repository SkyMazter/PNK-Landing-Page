import "./App.css";
import { useState } from "react";
import Background from "./components/Background.tsx";
import { Outlet } from "react-router-dom";

const App = () => {
  const navItems: string[] = [
    "PNKv4",
    "About Us",
    "Unify",
    "Etherpad",
    "HackChat",
    "Archive",
  ];

  const [navOp, setNavOp] = useState<string>("PNKv4");

  return (
    <div className="main">
      <Background/>
      
      <div className="container share-tech-regular d-flex flex-column-reverse">
        <div className="row nav-bar justify-content-around">
          {navItems.map((item) => (
            <div
              key={item}
              className={`col nav-item d-flex justify-content-center ${
                navOp === item ? "active" : ""
              } `}
              onClick={() => setNavOp(item)}
            >
              {navOp === item ? <p className="pe-1">={'>'}</p> : null}
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <Outlet/>
    </div>
  );
};

export default App;
