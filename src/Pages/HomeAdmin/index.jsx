import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalInfoUser } from "../../components/ModalInfoUser";
import { AuthContext } from "../../contexts/AuthContext";
import { useApi } from "../../services/useAuth";
import { getallTechs } from "../../services/techService";
import { findUserById } from "../../services/userService";

import "../../styles/admin.css";

export function HomeAdmin() {
    const [users, setUsers] = useState([""]);
    const [filtrado, setFiltrado] = useState([]);
    const [modalInfoUser, setModalInfoUser] = useState(false);
    const [search, setSearch] = useState("");
    const [user, setUser] = useState({});
    const [technology, setTechnology] = useState({});
    const token = localStorage.getItem("TOKEN");
    const auth = useContext(AuthContext);
    const api = useApi();

    const navigate = useNavigate();

    useEffect(() => {
        async function getAll() {
            const allUsers = await getallTechs(token);
            setUsers(allUsers);
        }
        getAll();
    }, [token]);

    useEffect(() => {
        const filtered = users.filter((user) => {
            if (user.name) {
                if (
                    user.name.toLowerCase().startsWith(search.toLowerCase()) ||
                    user.nivel.toLowerCase().startsWith(search.toLowerCase())
                ) {
                    return true;
                }
            }
            return false;
        });
        setFiltrado(filtered);
    }, [search, users]);

    const logout = async () => {
        await api.signout();
        navigate("/");
    };

    const openModalUser = async (tech) => {
        setTechnology(tech);
        const userInfo = await findUserById(token, tech.id_user);
        setUser(userInfo);
        setModalInfoUser(true);
    };

    return (
        <section className="container">
            <div className="separation"></div>

            <div className="admin_infos">
                <div className="name">
                    <h1>Olá, </h1>
                    <h3>{auth.user.name}, bem vindo!</h3>
                </div>
                <div>
                    <button onClick={logout}> Sair </button>
                </div>
            </div>

            <div className="separation"></div>
            <div className="input">
                <p>Pesquisar Tech</p>
                <input onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div className="container_list_techs_external"></div>
            {filtrado.length > 0 && (
                <div className="container_list_techs_admin">
                    {filtrado.map((item) => (
                        <div
                            className="list_techs"
                            key={item.id}
                            onClick={() => openModalUser(item)}
                        >
                            <span className="title_tech">{item.name}</span>
                            <span className="title_tech">{item.nivel}</span>
                        </div>
                    ))}
                </div>
            )}
            {modalInfoUser && (
                <ModalInfoUser
                    setModalInfoUser={setModalInfoUser}
                    user={user}
                    technology={technology}
                />
            )}
        </section>
    );
}
