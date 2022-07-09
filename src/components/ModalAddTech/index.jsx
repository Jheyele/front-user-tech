import "./styles.css";
import React, { useContext, useState } from "react";
import { addTech } from "../../services/techService";
import { AuthContext } from "../../contexts/AuthContext";

export function ModalAddTech({ setModalAdd }) {
    const token = localStorage.getItem("TOKEN");
    const [nameTech, setNameTech] = useState();
    const [nivelTech, setNivelTech] = useState();
    const auth = useContext(AuthContext);

    const handleSubmit = async () => {
        await addTech(nameTech, nivelTech, auth.user.id, token);
        setModalAdd(false);
    };

    return (
        <section className="container_modal_add">
            <div className="header_modal_add">
                <h3>Cadastrar Tecnologias</h3>
                <button className="close_modal_add" onClick={() => setModalAdd(false)}>
                    X
                </button>
            </div>
            <div className="general_modal_add">
                <div className="form_modal_add">
                    <p className="p_modal_add">Nome</p>
                    <input
                        className="input_modal_add"
                        onChange={(event) => setNameTech(event.target.value)}
                    />

                    <p className="p_modal_add">Selecionar status</p>
                    <select onChange={(event) => setNivelTech(event.target.value)}>
                        <option defaultValue="Iniciante"> Iniciante </option>
                        <option value="Intermediário"> Intermediário </option>
                        <option value="Avançado"> Avançado </option>
                    </select>
                    <button className="add_modal_add" onClick={handleSubmit}>
                        Cadastrar Tecnologia
                    </button>
                </div>
            </div>
        </section>
    );
}
