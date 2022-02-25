import React from "react";
import LoginForm from "../components/Login";

const Login = () => {
  return (
    <div className="flex w-full lg:flex-row flex-col bg-persiangreen ">
      <div className="w-full lg:w-1/2">
        <img src="https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxpb24lMjByb2FyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Female lion looking up into nothingness"/>
      </div>
      <div className="w-full lg:w-1/2">
        <div><LoginForm /></div> 
      </div>
    </div>
  );
};

export default Login;
