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

  const navLinks: Record<string, string> = {
    PNKv4: "http://pnkv3:81",
    Droppy: "http://pnkv3:8989/",
    HackChat: "http://pnkv3:3000",
    Etherpad: "http://pnkv3:9001",
    Unifi: "https://pnkv3:8443/",
  };

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
          {navItems.map((navItem) => (
            <div
              key={navItem}
              className={`col nav-item d-flex justify-content-center ${
                navOp === navItem ? "active" : ""
              } `}
              onClick={() => {
                setNavOp(navItem);

                if (navItem === "Close_Menu") {
                  setNavOp("PNKv4");
                }

                handleMenuToggle();
              }}
            >
              {navOp === navItem ? <p className="pe-1">={">"}</p> : null}
              <a
                href={navLinks[navItem]}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {navItem}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
