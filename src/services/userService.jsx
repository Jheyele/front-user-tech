import api from "./api";

export const login = async (email, password) => {
    const user = await api.post("/login", { email, password }).then(response => response).catch(err => err);
    return user;
}

export const usersAll = async () => {
    const users = await api.get("/users");
    return users.data;
}

export const createUser = async (name, email, pass) => {
    const user = await api.post("/users", { name, email, pass });
    return user.data;
}

export const loginUser = async (email, password) => {
    const user = await api.post("/login", { email, password }).then(response => response.data).catch(err => err);
    return user;
}

export const findUserById = async (token, id) => {
    const user = await api.get(`/users/${id}`, {
        headers: {
            authorization: token
        }
    }).then(response => response.data).catch(err => err);
    return user;
}
