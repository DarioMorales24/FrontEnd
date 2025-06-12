import { useState } from 'react'
import './App.css'
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { CoursesPage } from './pages/CoursesPage/CoursesPage.jsx'
'./pages'

export const App = () => {
    return (
        <div className="App">
            {/*<LoginPage/>*/}
            <CoursesPage/>
        </div>
    )
}

export default App
