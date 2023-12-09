import React from "react";
import { login, logout } from "../store/userSlice";
import { useDispatch } from "react-redux";

const TastRedux2 = () => {
  const dispatch = useDispatch();

  return (
    <div>
      TastRedux2 2
      <br />
      <button onClick={() => dispatch(login())}>Hello Redux</button>
    </div>
  );
};

export default TastRedux2;
