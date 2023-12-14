import React from "react";

import { register } from "../../../functions/auth";

const Register = ( res ) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userRegister = {
      name: data.get("name"),
      password: data.get("password"),
    };

    console.log(userRegister);

    register(userRegister)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" id="name" />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
