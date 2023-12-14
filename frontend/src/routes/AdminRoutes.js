import React from "react";

const AdminRoutes = ({ children }) => {
  return (
      <div>
      <div className="nav-admin"></div>
      {children}
    </div>
  );
};

export default AdminRoutes;
