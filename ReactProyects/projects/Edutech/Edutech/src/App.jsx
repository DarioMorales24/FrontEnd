import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { CoursesPage } from './pages/CoursesPage/CoursesPage.jsx'
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";

export const App = () => {
    const location = useLocation();

    // Verifica si estamos en la página de login
    const isLoginPage = location.pathname === '/login';

    return (
        <div className={'app-container'}>
            {/* Renderiza Navbar y Sidebar solo si NO estamos en la página de login */}
            {!isLoginPage && <Navbar />}
            {!isLoginPage && <Sidebar />}

            <div className={`content ${isLoginPage ? 'no-padding' : ''}`}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                </Routes>
            </div>
        </div>
    );
};

// Envolviendo la App con Router
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;