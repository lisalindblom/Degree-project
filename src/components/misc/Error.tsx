import { Link } from "react-router-dom";
import error from "../../assets/error.png";

export const Error = () => {
  return (
    <>
      <div className="error">
        <img src={error} alt="" />
        <p>Oops! Something went wrong</p>
        <Link to={"/"}>Go back to start</Link>
      </div>
    </>
  );
};
