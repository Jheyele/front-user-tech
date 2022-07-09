import React, { useContext, useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const auth = useContext(AuthContext);

    const goRegister = () => {
        navigate("/register");
    };

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate("/home");
            } else {
                setStatus("401");
            }
        }
    };

    return (
        <div className="container_login">
            <section className="section_form_login">
                <form className="form_login">
                    <p className="p_login">Login</p>
                    <div className="div_inputs">
                        <p className="p_title">E-mail</p>
                        <input
                            className="input_form"
                            variant="outlined"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <p className="p_title">Senha</p>
                        <input
                            className="input_form"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    {status === "401" ? (
                        <p className="p_incorret"> Usuario e/ou senha incorretos </p>
                    ) : (
                        ""
                    )}
                    <button
                        className="button_general_login"
                        id="button_login"
                        type="button"
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>

                    <p className="p_not_acount">Ainda não possui uma conta?</p>

                    <button
                        className="button_general_login"
                        id="button_register"
                        onClick={goRegister}
                    >
                        Cadastre-se
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Login;
