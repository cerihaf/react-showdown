import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import { ADD_USER } from "../../utils/mutations";

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
    <form className="bg-persiangreen">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="flex p-4">
        <button type="button" onClick={handleLogin} className="mx-4">
          Login
        </button>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
