// src/pages/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, login, logout} = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, senha: password };

    try {
      login(true);
    

       // Aqui você pode armazenar os dados do usuário ou token, se necessário

      // Aqui, você pode armazenar um token de autenticação, se sua API retornar um
      // localStorage.setItem('token', response.data.token);



      alert('Login bem-sucedido! Redirecionando para a página principal...');
      navigate("/");
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Falha no login. Verifique suas credenciais e tente novamente.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={styles.body}>
      <div className="login-container" style={styles.loginContainer}>
        <div className="login-header" style={styles.loginHeader}>
          <i className="fas fa-brain" style={styles.logoIcon}></i>
          <h1 style={styles.h1}>Sabi<span style={styles.span}>dus</span></h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="nome@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Senha</label>
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={styles.button}>Entrar</button>
        </form>
        <div className="register-link" style={styles.registerLink}>
          <p>Não tem uma conta? <a href="/register" style={styles.link}>Registre-se</a></p>
        </div>
      </div>
    </div>
  );
};

// Estilos inline (seus estilos aqui)
const styles = {
  body: {
    fontFamily: "'Roboto', Arial, sans-serif",
    backgroundColor: '#f8f9fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: '20px 0',
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    width: '100%',
    maxWidth: '400px',
  },
  loginHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  logoIcon: {
    fontSize: '3rem',
    color: '#3498DB',
    marginBottom: '0.5rem',
    display: 'block',
  },
  h1: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: '2rem',
    color: '#2C3E50',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '0.5rem',
  },
  span: {
    color: '#3498DB',
  },
  button: {
    width: '100%',
    backgroundColor: '#3498DB',
    borderColor: '#3498DB',
  },
  registerLink: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  link: {
    color: '#3498DB',
    textDecoration: 'none',
  },
};

export default Login;