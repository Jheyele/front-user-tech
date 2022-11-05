import "./styles.css";
import React, { useState } from "react";
import { addTech } from "../../services/techService";

export function ModalAddTech({ setModalAdd }) {
    const token = localStorage.getItem("TOKEN");
    const userId = localStorage.getItem("ID");
    const [nameTech, setNameTech] = useState();
    const [nivelTech, setNivelTech] = useState();

    const handleSubmit = async () => {
        await addTech(nameTech, nivelTech, userId, token);
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
