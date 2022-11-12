import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { HomeAdmin } from "../pages/HomeAdmin";
import Login from "../pages/Login";
import { Register } from "../pages/Register";
import { RequireAuth } from "../services/requireAuth";


export function Router() {

    const [authenticate, setAuthenticate] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("TOKEN");
        if (token) {
            setAuthenticate(true);
        }
    }, [authenticate]);

    return (
        <Routes>
            <Route path="/" element={<Login setAuthenticate={setAuthenticate} />} />
            <Route path="/home" element={<RequireAuth> <Home authenticate={authenticate} setAuthenticate={setAuthenticate}/> </RequireAuth>} />
            <Route path="/register" element={<Register />} />
            <Route path="/home-admin" element={<RequireAuth> <HomeAdmin /> </RequireAuth>} />
        </Routes>
    )
}