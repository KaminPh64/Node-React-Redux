import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login as loginFunction } from "../../../functions/auth";
import { login as loginRedux } from "../../../store/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userLogin = {
      name: data.get("name"),
      password: data.get("password"),
    };

    loginFunction(userLogin)
      .then((res) => {
        alert(res.data);
        console.log(res.data);
        dispatch(
          loginRedux({
            name: res.data.payload.user.name,
            role: res.data.payload.user.role,
            token: res.data.token,
          })
        );
        localStorage.setItem("token",res.data.token);
        roleRedirect(res.data.payload.user.role);
      })
      .catch((err) => console.log(err));
  };

  const roleRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin/home");
    } else {
      navigate("/user/home");
    }
  };

  return (
    <div>
      <h3>Login</h3>
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

export default Login;
