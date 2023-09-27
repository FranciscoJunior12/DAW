

import React, { useContext, useEffect, useState } from 'react'
import Painel from './Painel';
import { Link, useNavigate } from 'react-router-dom';
import PainelAdmin from './PainelAdmin';
import { ThemeContext } from '../context/EstadoGlobal';



const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const { setPerfil } = useContext(ThemeContext);

    const handleLogin = (e) => {

        e.preventDefault();


        if (email === 'user@email.com' && password === '12345678') {
            setPerfil('Usuário');
            setError(false)
            navigate('/user')

        } else if (email === 'admin@email.com' && password === '12345678') {
            setPerfil('Admin');

            setError(false)

            navigate('/admin')

        } else {
            setError(true);
        }
    };

    const cleanFields = () => {

        setEmail("");
        setPassword("");


    }


    return (
        <div>

            <h1>Login</h1>

            <form onSubmit={handleLogin} >
                <input
                    type="text"
                    placeholder='Insira seu usuario'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Insira sua password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button >Login</button>

                <h2 className={`error ${error === false ? 'invisible' : "visible"}`} >Email ou password invalidos</h2>


            </form>

        </div>
    )
}

export default Login