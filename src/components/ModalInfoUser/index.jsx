import "./styles.css";
import React from "react";

export function ModalInfoUser({ setModalInfoUser, user, technology }) {
    return (
        <section className="container_modal_info">
            <div className="header_modal_info">
                <h3>Informações</h3>
                <button className="close_modal_info" onClick={() => setModalInfoUser(false)}>
                    X
                </button>
            </div>
            <div className="general_modal_info">
                <div className="modal_info">
                    <p>Nome:</p>
                    <span>{user.name}</span>
                </div>
                <div className="border"></div>
                <div className="modal_info">
                    <p>Email:</p>
                    <span>{user.email}</span>
                </div>
                <div className="border"></div>
                <div className="modal_info">
                    <p>Tech:</p>
                    <span>{technology.name}</span>
                </div>
                <div className="border"></div>
                <div className="modal_info">
                    <p>Nivel:</p>
                    <span>{technology.nivel}</span>
                </div>
            </div>
        </section>
    );
}
