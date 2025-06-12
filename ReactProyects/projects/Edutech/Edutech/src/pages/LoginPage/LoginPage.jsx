import './LoginPageStyles.css'
import {useState} from "react";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

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
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    }
  return (
    <div className="login-page">
        <section className="login-container">
            <div className="form-container">
                <div className="logo-container">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Kmux0hne-wbZcnXICDfQ8xTLXRUWuyoraw&s"
                        alt="logo"
                    />
                </div>
                <h1 className="login-title">Login</h1>
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
                        <a href="/register" className="register-link">Sing Up</a>
                        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                    </div>
                    <button className="btn-submit" type="submit">Login</button>
                </form>
            </div>
        </section>
    </div>
  );
}