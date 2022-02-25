import React from "react";
import LoginForm from "../components/Login";

const Login = () => {
  return (
    <section className="flex flex-1">
      <div className="flex w-full flex-row lg:flex-row bg-charcoal ">
        <div className="w-full lg:w-1/2 lion">
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
