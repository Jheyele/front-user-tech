import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../contexts/RequireAuth";
import { Home } from "../Pages/Home";
import { HomeAdmin } from "../Pages/HomeAdmin";
import Login from "../Pages/Login";
import { Register } from "../Pages/Register";


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