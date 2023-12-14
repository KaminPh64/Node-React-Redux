import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

//store
import { login as loginRedux } from "./store/userSlice";

//function
import { currentUser } from "./functions/auth";

//routes
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

//paegs
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";

//admin
import HomepageAdmin from "./components/pages/admin/HomepageAdmin";
import FormProduct from "./components/product/FormProduct";
import FormEditProduct from "./components/product/FormEditProduct";

//user
import HomepageUser from "./components/pages/user/HomepageUser";

function App() {
  const dispatch = useDispatch();

  const tokenId = localStorage.getItem("token");
  // console.log("App.js --> " + tokenId);

  currentUser(tokenId)
    .then((res) => {
      console.log(res);
      dispatch(
        loginRedux({
          name: res.data.name,
          role: res.data.role,
          token: tokenId,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* user */}
        <Route
          path="/user/home"
          element={
            <UserRoutes>
              <HomepageUser />
            </UserRoutes>
          }
        />
        {/* ---------------- */}

        {/* admin */}
        <Route
          path="/admin/home"
          element={
            <AdminRoutes>
              <HomepageAdmin />
            </AdminRoutes>
          }
        />
        <Route
          path="/admin/viewtable"
          element={
            <AdminRoutes>
              <FormProduct />
            </AdminRoutes>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <AdminRoutes>
              <FormEditProduct />
            </AdminRoutes>
          }
        />
        {/* ---------------- */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
