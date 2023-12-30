import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <ul className="flex-row">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/posts"}> Guides and inspiration</Link>
            </li>
            <li>
              <Link to={"/material-guide"}> Fabric guide</Link>
            </li>
            <li>
              <Link to={"/climate-impact"}> Climate Impact</Link>
            </li>
            <li>
              <Link to={"/about-us"}> About us</Link>
            </li>
            <li>
              <Link to={"/login"}> Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
