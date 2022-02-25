import React from "react";
import LoginForm from "../components/Login";

const Login = () => {
  return (
    <section className="flex flex-1">
      <div className="flex w-full flex-row lg:flex-row bg-charcoal ">
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVuZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
            alt="placeholder"
          />
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
