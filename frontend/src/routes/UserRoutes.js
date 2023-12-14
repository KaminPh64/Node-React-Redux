import React from "react";
import { useSelector } from "react-redux";

const UserRoutes = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("userRoutes -> ", user);
  return user && user.user.token ? (
    <div>
      <div className="nav-user"></div>
      {children}
    </div>
  ) : (
    <div>No login</div>
  );
};

export default UserRoutes;
