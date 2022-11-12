import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalAddTech } from "../../components/ModalAddTech";
import { ModalEditTech } from "../../components/ModalEditTech";
import { useApi } from "../../services/useAuth";
import { techsByUser } from "../../services/techService";
import "../../styles/home.css";

export function Home({ authenticate, setAuthenticate }) {
    const navigate = useNavigate();

    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [techs, setTechs] = useState([]);
    const [technology, setTechnology] = useState({});
    const api = useApi();

    const tokenStorage = localStorage.getItem("TOKEN");
    const userId =  localStorage.getItem("ID");
    const userName = localStorage.getItem("NAME");

    if(!authenticate){
        navigate("/");
    }

    useEffect(() => {
        async function techsData() {
            const techArr = await techsByUser(tokenStorage, userId);
            setTechs(techArr);
        }
        techsData();
    }, [modalAdd, modalEdit, userId, tokenStorage]);

    const logout = async () => {
        await api.signout();
        navigate("/");
    };

    const addTech = () => {
        setModalAdd(true);
    };

    const openModalEdit = (id) => {
        setTechnology(techs.find((tech) => tech.id === id));
        setModalEdit(true);
    };

    return (
        <section className="container_home">
            <div className="separation"></div>

            <div className="user_infos">
                <div className="hello">
                    <h1>Olá, </h1>
                    <h3>{userName}, bem vindo!</h3>
                </div>
                <button onClick={logout}> Sair </button>
            </div>

            <div className="separation"></div>
            <div className="title_techs">
                <p>Tecnologias</p>
                <button className="button_add_tech" onClick={addTech}>
                    +
                </button>
            </div>
            <div className="container_list_techs"></div>
            {techs.length > 0 && (
                <div className="container_list_techs">
                    {techs.map((item) => (
                        <div
                            className="list_techs"
                            key={item.id}
                            onClick={() => openModalEdit(item.id)}
                        >
                            <span className="title_tech">{item.name}</span>
                            <span className="title_status">{item.nivel}</span>
                        </div>
                    ))}
                </div>
            )}

            {modalAdd && <ModalAddTech setModalAdd={setModalAdd} />}
            {modalEdit && <ModalEditTech setModalEdit={setModalEdit} technology={technology} />}
        </section>
    );
}
