import { LayoutPublic } from "../../../components/Layout/layoutPublic";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-96">
       
      </div>
    </>
  );
};

SignIn.auth = false;
SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutPublic>{page}</LayoutPublic>;
};

export default SignIn;
