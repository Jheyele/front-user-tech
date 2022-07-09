import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../contexts/RequireAuth";
import { Home } from "../Pages/Home";
import { HomeAdmin } from "../Pages/HomeAdmin";
import Login from "../Pages/Login";
import { Register } from "../Pages/Register";


export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/register" element={<Register />} />
            <Route path="/home-admin" element={<RequireAuth><HomeAdmin /></RequireAuth>} />
        </Routes>
    )
}