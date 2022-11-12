import { Navigate } from "react-router-dom";
import { HomeAdmin } from "../pages/HomeAdmin";

export const RequireAuth = ({ children }) => {
    const userName = localStorage.getItem("NAME");
    
    if (userName === "admin") {
        return <HomeAdmin />;  
    }
    else if (userName !== null) {
        return children;
    }

    return <Navigate to="/" />;
}