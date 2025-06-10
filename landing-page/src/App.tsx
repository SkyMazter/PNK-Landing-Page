import "./App.css";
import { useState } from "react";
// import Background from "./components/Background.tsx";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav.tsx";
import MatrixRain from "./components/MatrixRain.tsx";

const App = () => {
  const navItems: string[] = [
    "PNKv4",
    "Droppy",
    "HackChat",
    "Etherpad",
    "Unifi",
  ];

  const [navOp, setNavOp] = useState<string>("PNKv4");

  const navLinks: Record<string, string> = {
    PNKv4: "http://pnkv3:81",
    Droppy: "http://pnkv3:8989/",
    HackChat: "http://pnkv3:3000",
    Etherpad: "http://pnkv3:9001",
    Unifi: "https://pnkv3:8443/",
  };

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
              <a
                href={navLinks[item]}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
