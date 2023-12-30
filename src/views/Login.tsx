import { useState } from "react";
import { UserAuth } from "../components/login/UserAuth";

export const Login = () => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const handleSignIn = (isSignedIn: boolean) => {
    setSignedIn(isSignedIn);
  };
  console.log(signedIn);

  return (
    <>
      <div className="flex-col main-content outline">
        <UserAuth onSignedIn={handleSignIn}></UserAuth>
      </div>
    </>
  );
};
