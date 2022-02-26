import React from "react";
import LoginForm from "../components/Login";

const Login = () => {
  return (
    <section className="flex flex-1">
      <div className="flex w-full flex-row lg:flex-row">
        <div className="w-full lg:w-1/2 lion">
          <h1>Who's your champion?</h1>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-1">
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
