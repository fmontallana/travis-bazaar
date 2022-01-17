import { Outlet } from "react-router-dom"
import Login from "./Pages/Login"

export default function ProtectedRoutes ({isAuth}) {
    return isAuth ? <Outlet /> : <Login />
}