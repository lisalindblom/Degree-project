import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <ul className="container-row">
            <li>
              <Link to={"/guides"}> Guides</Link>
            </li>
            <li>
              <Link to={"/climate-impact"}> Climate Impact</Link>
            </li>
            <li>
              <Link to={"/material-guide"}> Material guide</Link>
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
