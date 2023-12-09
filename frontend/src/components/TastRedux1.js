import React from "react";
import { useSelector } from "react-redux";

const TastRedux1 = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div>
      <b>TastRedux1</b>
      <br />
      {user.value}
      <br />
      {user.user}
    </div>
  );
};

export default TastRedux1;
