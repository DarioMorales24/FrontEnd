import './LoginPageStyles.css';  // Asegúrate de tener este archivo para los estilos
import { useState } from 'react';
import React from 'react';
import logo from '../../assets/logo/logo-abajo-negro.webp'
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para redirigir después del login

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Estado para mostrar errores

    const navigate = useNavigate(); // Hook de React Router para redirección

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de los campos
        if (!email || !password) {
            setError('Por favor, complete ambos campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);

            // Guardar token si es necesario
            // localStorage.setItem("token", data.token);  // Si necesitas guardar el token

            // Redirigir al usuario a la página de inicio (puedes cambiar la ruta)
            navigate('/home'); // Redirige a la página de inicio o la página que necesites

        } catch (error) {
            setError('Error durante el login: ' + error.message); // Mostrar el error al usuario
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div className="login-page">
            <section className="login-container">
                <div className="form-container">
                    <div className="logo-container">
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <h1 className="login-title">Login</h1>
                    {/* Mostrar el error si existe */}
                    {error && <p className="error-message">{error}</p>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="label-input">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="label-input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="links">
                            <a href="/register" className="register-link">Sign Up</a>
                            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                        </div>
                        <button className="btn-submit" type="submit">Login</button>
                    </form>
                </div>
            </section>
        </div>
    );
};