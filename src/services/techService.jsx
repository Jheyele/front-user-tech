import api from "./api";

export const addTech = async (name, nivel, id_user, token) => {
    const tech = await api.post("/techs", { name, nivel, id_user }, {
        headers: {
            authorization: token
        }
    }).then(response => response.data).catch(err => err);
    return tech;
}

export const getallTechs = async (token) => {
    const tech = await api.get("/techs", {
        headers: {
            authorization: token
        }
    }).then(response => response.data).catch(err => err);
    return tech;
}

export const updateTech = async (id, name, nivel, id_user, token) => {
    const tech = await api.put(`/techs/${id}`, { name, nivel, id_user }, {
        headers: {
            authorization: token
        }
    }).then(response => response.data).catch(err => err);
    return tech;
}

export const deleteTech = async (id, token) => {
    const tech = await api.delete(`/techs/${id}`, {
        headers: {
            authorization: token
        }
    }).then(response => response.data).catch(err => err);
    return tech;
}

export const techsByUser = async (token, id_user) => {
    const tech = await api.get(`/techs/techs-by-user/${id_user}`, {
        headers: {
            authorization: token
        }
    }).catch(err => err);

    return tech.data;
}

