import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import md5 from "md5";

class ProtectedRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return localStorage.getItem("logged") === md5("loggato") ? <Outlet /> : <Navigate to="/forbidden" />;
  }
}

export default ProtectedRoutes;