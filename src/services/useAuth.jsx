
import jwt_decode from "jwt-decode";
import api from "./api";

export const useApi = () => ({
    validateToken: async (token) => {
        let isExpired = false;
        const decodedToken = jwt_decode(token);
        const dateNow = new Date();

        if (decodedToken.exp < dateNow.getTime()) {
            isExpired = false;
        }

        if (!isExpired) {
            const user = await api.get(`/users/${decodedToken.id}`, {
                headers: {
                    authorization: token
                }
            }).catch(err => err);
            localStorage.setItem('ID', user.data.id);
            return user.data;
        }
        return null;
    },
    signin: async (email, password) => {
        const user = await api.post("/login", { email, password }).then(response => response.data).catch(err => err);
        return user;

    },
    signout: async () => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("ID");
        localStorage.removeItem("NAME");
    }
});