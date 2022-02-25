import React from "react";
import LoginForm from "../components/Login";

const Login = () => {
  return (
    <div className="flex w-full lg:flex-row flex-col bg-charcoal ">
      <div className="w-full lg:w-1/2 lion">
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center flex-1">
        <div><LoginForm /></div> 
      </div>
    </div>
  );
};

export default Login;
