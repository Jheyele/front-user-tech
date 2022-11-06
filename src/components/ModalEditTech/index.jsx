import { useState } from "react";
import { deleteTech, updateTech } from "../../services/techService";
import "./styles.css";

export function ModalEditTech({ setModalEdit, technology }) {
    const [nameTech, setNameTech] = useState();
    const [nivelTech, setNivelTech] = useState();
    const userId = localStorage.getItem("ID");
    const token = localStorage.getItem("TOKEN");

    const updateTechnology = async () => {
        await updateTech(technology.id, nameTech, nivelTech, userId, token)
        setModalEdit(false)
    };

    const removeTechnology = async () => {
        await deleteTech(technology.id, token);
        setModalEdit(false)
    };
    return (
        <section className="container_modal_edit">
            <div className="header_modal_edit">
                <h3>Tecnologias Detalhes</h3>
                <button className="close_modal_edit" onClick={() => setModalEdit(false)}>
                    X
                </button>
            </div>
            <div className="general_modal_edit">
                <div className="form_modal_edit">
                    <p className="p_modal_edit">Nome</p>
                    <input
                        type={"text"}
                        defaultValue={technology.name}
                        className="input_modal_edit"
                        onChange={event => setNameTech(event.target.value)}
                    />

                    <p className="p_modal_edit">Selecionar Nivel</p>
                    <select defaultValue={technology.nivel} onChange={event => setNivelTech(event.target.value)}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <div className="buttons_modal_edit">
                        <button className="edit_modal_edit" onClick={updateTechnology}>
                            Salvar alterações
                        </button>
                        <button
                            className="delete_modal_edit"
                            onClick={() => removeTechnology(technology.id)}
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
