import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN, ADD_USER } from "../../utils/mutations";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [login] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  // submit form
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <form className="bg-charcoal">
      <h2 className="font-login text-2xl text-maizecrayola text-center">Register for the Battle!</h2>
      <div>
        <label className="sr-only" htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
          placeholder="USERNAME"
          className="box-border w-full bg-zinc-400 placeholder:text-slate-500 placeholder:text-center py-5 px-12 my-3 rounded-none"
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="PASSWORD"
          className="box-border w-full bg-zinc-400 placeholder:text-slate-500 placeholder:text-center py-5 px-12 my-3 rounded-none"        />
      </div>
      <div className="flex mt-3">
        <button type="button" onClick={handleLogin} className="font-login font-bold mr-4 bg-maizecrayola py-5 pl-10 pr-10">
          LOGIN
        </button>
        <button type="button" onClick={handleSignUp} className="font-login font-bold bg-maizecrayola py-5 pl-9 pr-8">
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
