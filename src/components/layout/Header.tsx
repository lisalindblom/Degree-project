import { useState } from "react";
import { Nav } from "./Nav";
import HamburgerMenu from "react-hamburger-menu";
// import {
//   BrowserView,
//   MobileView,
//   isBrowser,
//   isMobile,
// } from "react-device-detect";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container-column header">
        <div className="top">
          <div className="logo">Brand</div>
          {!isOpen ? (
            <button
              typeof="button"
              className="menu"
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              Menu
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </button>
          ) : null}
        </div>

        <div className="hamburger">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleMenuClick}
            color="white"
            width={25}
            height={20}
          ></HamburgerMenu>
        </div>
        {isOpen ? <Nav></Nav> : null}
        {showNav ? <Nav></Nav> : null}
      </div>
    </>
  );
};
