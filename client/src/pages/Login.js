import React from "react";
import LoginForm from "../components/Login";

const Login = () => {
  return (
    <section className="flex flex-1">
      <div className="flex w-full flex-row lg:flex-row">
        <div className="w-full mobile-s, mobile-m, mobile-l:hidden md:w-96 lg:w-1/2">
          <svg viewBox="0 0 960 300" className="svg pb-8">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">
                Let's Fight{" "}
              </text>
              <text textAnchor="middle" x="51%" y="80%">
                Let's Fight{" "}
              </text>
            </symbol>

            <g className="g-ants">
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
          </svg>
          <img
            src="./images/lion.png"
            alt="lion looking up into nothingness"
            className="pt-2"
          />
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
