import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

import imageBackground from '../../assets/ImageBg.png';

import imageBackground2 from '../../assets/ImageBg2.png';

const SignIn = () => {
    const [hasError, setHasError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    function handleSubmit() {
        setHasError(false);
        const exampleCredentials = {
            email: 'jonbrand@gmail.com',
            password: '123456',
        };

        if (exampleCredentials.email === email && exampleCredentials.password === password) {
            history.push('/dashboard');
            return;
        }

        setHasError(true);
    }

    return (
        <div className="signin-container">
            <div className="login-logo">
                <img src={imageBackground} className="center-image" alt="Work"/>
                <img src={imageBackground2} className="background-image" alt="Circle"/>
            </div>

            <form onSubmit={handleSubmit} className="form">
                {hasError && (
                    <h2>Erro na autenticacao, cheque as credenciais</h2>
                )}

                <h1>Faça seu login</h1>

                <div className="login-email ">
                    <i className="fa fa-envelope"/>
                    <input
                        className="email"
                        placeholder="E-mail"
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </div>

                <div className="login-pass">
                    <i className="fa fa-lock"/>
                    <input
                        className="pass"
                        placeholder="Senha"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>

                <button className="signin-button" type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default SignIn;