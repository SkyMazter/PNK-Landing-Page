import "./App.css";
import { useState } from "react";
import Background from "./components/Background.tsx";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav.tsx";

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
      <Background />

      <div className="main container share-tech-regular d-flex justify-content-around flex-column-reverse">
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
        <Outlet />
          <MobileNav/>
      </div>
    </div>
  );
};

export default App;
