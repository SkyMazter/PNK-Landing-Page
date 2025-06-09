import "./App.css";
import { useState } from "react";
import Background from "./components/Background.tsx";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav.tsx";
import MatrixRain from "./components/MatrixRain.tsx";

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
    <div className="window">
      <MatrixRain />
      <div className="main container share-tech-regular">
        <MobileNav />
        <div className="main-title">
          <h3>{navOp}</h3>
        </div>
        <Outlet />
        <div className="row nav-bar justify-content-around">
          {navItems.map((item) => (
            <div
              key={item}
              className={`col nav-item d-flex justify-content-center ${
                navOp === item ? "active" : ""
              } `}
              onClick={() => setNavOp(item)}
            >
              {navOp === item ? <p className="pe-1">={">"}</p> : null}
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
