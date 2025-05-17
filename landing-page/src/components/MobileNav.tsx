import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const navItems: string[] = [
    "PNKv4",
    "About Us",
    "Unify",
    "Etherpad",
    "HackChat",
    "Archive",
    "Close_Menu",
  ];

  const [navOp, setNavOp] = useState<string>("PNKv4");

  return (
    <div className="mobile-nav">
      <button onClick={handleMenuToggle} className="bttn">
        <RxHamburgerMenu />
      </button>

      <h5 className="title">PNKv4</h5>

      <div className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <div className="container px-5 py-3 d-flex flex-column align-items-start">
          <h3 className="header typing-animation">Select Destination</h3>
          {navItems.map((item) => (
            <div
              key={item}
              className={`col nav-item d-flex justify-content-center ${
                navOp === item ? "active" : ""
              } `}
              onClick={() => {
                setNavOp(item);

                if (item === 'Close_Menu') {
                  setNavOp("PNKv4")
                }

                handleMenuToggle();
              }}
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

export default MobileNav;
