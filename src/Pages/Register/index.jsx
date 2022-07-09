import "../../styles/register.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/userService";

export function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPasssword] = useState();
    const [confirmPassword, setConfirmePassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    };

    const onSubmit = async () => {
        if (password === confirmPassword) {
            await createUser(name, email, password);
            navigate("/");
        } else {
            setError("Senhas diferentes!");
        }
    };

    return (
        <div className="container_register">
            <div className="div_form_register">
                <p className="p_register">Crie sua conta</p>

                <div className="form_register">
                    <div className="div_inputs_register">
                        <p className="p_title_register">Nome</p>
                        <input
                            placeholder="Digite aqui seu nome"
                            className="input_form_register"
                            onChange={(event) => setName(event.target.value)}
                        />

                        <p className="p_title_register">E-mail</p>
                        <input
                            placeholder="Digite aqui seu e-mail"
                            className="input_form_register"
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <p className="p_title_register">Senha</p>
                        <input
                            placeholder="Digite sua senha"
                            className="input_form_register"
                            type="password"
                            onChange={(event) => setPasssword(event.target.value)}
                        />

                        <p className="p_title_register">Confirmar Senha</p>
                        <input
                            placeholder="Confirme sua senha"
                            className="input_form_register"
                            type="password"
                            onChange={(event) => setConfirmePassword(event.target.value)}
                        />

                        {error ? <p className="p_senhaincorreta"> {error} </p> : ""}
                    </div>

                    <div className="footer_register">
                        <button className="button_register" type="submit" onClick={onSubmit}>
                            Cadastrar
                        </button>

                        <button className="button_back" onClick={goBack}>
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
