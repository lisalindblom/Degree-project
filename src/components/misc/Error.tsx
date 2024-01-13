import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <p>Oj! Här blev det fel</p>
      <Link to={"/"}>Gå till startsidan</Link>
    </>
  );
};
