import "./CoursesPageStyles.css"
import React from "react";
import { CourseCard } from "../../components/Cards/CourseCard.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import {Sidebar} from "../../components/Sidebar/Sidebar.jsx";

export const CoursesPage = () => {
    const link = 'https://web-assets.esetstatic.com/tn/-x700/wls/2024/5-2024/curso-ciberseguridad-online-gratis-eccouncil.jpeg'

    const courses = [
        { title: 'Java', description: 'Aprende Java desde cero', price: '14.990' },
        { title: 'Database', description: 'Aprende bases de datos desde cero', price: '14.990' },
        { title: 'JavaScript', description: 'Aprende JavaScript desde cero', price: '14.990' },
        { title: 'Python', description: 'Aprende Python desde cero', price: '14.990' },
        { title: 'React', description: 'Aprende React de forma práctica', price: '19.990' },
        { title: 'Node.js', description: 'Aprende backend con Node.js', price: '16.990' },
        { title: 'HTML & CSS', description: 'Crea páginas web desde cero', price: '9.990' },
        { title: 'Angular', description: 'Fundamentos de Angular para principiantes', price: '18.990' },
        { title: 'Machine Learning', description: 'Fundamentos de Machine Learning', price: '22.990' },
        { title: 'Go', description: 'Introducción al lenguaje Go', price: '15.990' },
        { title: 'Ruby', description: 'Aprende Ruby de manera fácil', price: '13.990' },
        { title: 'PHP', description: 'Desarrollo web con PHP', price: '14.990' },
    ];

    return (
        <div className={'page-container'}>
            <section className='course-content'>
                <h1>CURSOS</h1>
                <div className={'cards'}>
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            imageLink={link}
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