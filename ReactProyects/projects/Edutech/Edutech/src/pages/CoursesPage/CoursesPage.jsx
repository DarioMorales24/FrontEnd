import "./CoursesPageStyles.css"
import React from "react";
import { CourseCard } from "../../components/Cards/CourseCard.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import {Sidebar} from "../../components/Sidebar/Sidebar.jsx";

export const CoursesPage = () => {
    const link = 'https://web-assets.esetstatic.com/tn/-x700/wls/2024/5-2024/curso-ciberseguridad-online-gratis-eccouncil.jpeg'

    const courses = [
        {
            title: 'Java',
            imageName: 'java.webp',  // Nombre del archivo
            description: 'Aprende Java desde cero',
            price: '14.990'
        },
        {
            title: 'Database',
            imageName: 'database.webp',  // Nombre del archivo
            description: 'Aprende bases de datos desde cero',
            price: '14.990'
        },
        {
            title: 'JavaScript',
            imageName: 'js.webp',  // Nombre del archivo
            description: 'Aprende JavaScript desde cero',
            price: '14.990'
        },
        {
            title: 'Python',
            imageName: 'python.webp',  // Nombre del archivo
            description: 'Aprende Python desde cero',
            price: '14.990'
        },
        {
            title: 'React',
            imageName: 'react.webp',  // Nombre del archivo
            description: 'Aprende React de forma práctica',
            price: '19.990'
        },
        {
            title: 'Node.js',
            imageName: 'nodejs.webp',  // Nombre del archivo
            description: 'Aprende backend con Node.js',
            price: '16.990'
        },
        {
            title: 'HTML & CSS',
            imageName: 'html-css.webp',  // Nombre del archivo
            description: 'Crea páginas web desde cero',
            price: '9.990'
        },
        {
            title: 'Angular',
            imageName: 'angular.webp',  // Nombre del archivo
            description: 'Fundamentos de Angular para principiantes',
            price: '18.990'
        },
        {
            title: 'Machine Learning',
            imageName: 'machine.webp',  // Nombre del archivo
            description: 'Fundamentos de Machine Learning',
            price: '22.990'
        },
        {
            title: 'Go',
            imageName: 'go.webp',  // Nombre del archivo
            description: 'Introducción al lenguaje Go',
            price: '15.990'
        },
        {
            title: 'Ruby',
            imageName: 'ruby.webp',  // Nombre del archivo
            description: 'Aprende Ruby de manera fácil',
            price: '13.990'
        },
        {
            title: 'PHP',
            imageName: 'php.webp',  // Nombre del archivo
            description: 'Desarrollo web con PHP',
            price: '14.990'
        }
    ];

    return (
        <div className={'page-container'}>
            <section className='course-content'>
                <h1>CURSOS</h1>
                <div className={'cards'}>
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            imageName={course.imageName}
                            courseTitle={course.title}
                            courseDescription={course.description}
                            coursePrice={course.price}
                        />
                        )

                    )}
                </div>

            </section>
        </div>


    )
}