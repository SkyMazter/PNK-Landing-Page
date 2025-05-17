import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={isOpen ? "mobile-nav" : ""}>
      <button className={isOpen ? "d-none" : ""} onClick={handleMenuToggle}>
        <RxHamburgerMenu />
      </button>
      <div className={!isOpen ? "d-none mobile-menu" : ""}>
        <button className={!isOpen ? "d-none" : ""} onClick={handleMenuToggle}>
          x
        </button>
        <ul>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
