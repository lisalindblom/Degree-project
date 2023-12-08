import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="outline header">
        <div className="outline">Brand</div>
        <nav>
          <ul className="outline container-row">
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
