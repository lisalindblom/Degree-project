import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import HamburgerMenu from "react-hamburger-menu";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
    setIsOpen(false);
  }, [location]);

  const handleMenuClick = () => {
    setShowNav(!showNav);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container-column header">
        <div className="top">
          <div className="logo">
            <Link to={"/"}>RE:LIFE</Link>
          </div>
          <div className="icon-container">
            <Link to={"/profile"}>
              <span className="material-symbols-rounded">favorite</span>
            </Link>
            <Link to={"/profile"}>
              <span className="material-symbols-outlined">person</span>
            </Link>
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
        </div>
        <div className="bottom"></div>

        <div className="hamburger">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleMenuClick}
            color="white"
            width={25}
            height={20}
          ></HamburgerMenu>
        </div>
        {showNav ? <Nav></Nav> : null}
      </div>
    </>
  );
};
