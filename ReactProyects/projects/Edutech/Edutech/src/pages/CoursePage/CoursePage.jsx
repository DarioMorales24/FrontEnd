import './CoursePageStyles.css'
import React from "react";
import {CardPage} from "../../components/CardPages/CardPages.jsx";

export const CoursePage = () => {
    const courses = [
        {
            courseId: 1,
            title: 'JavaScript',
            imageName: 'javascript.webp',  // Nombre del archivo
            description: 'Aprende JavaScript desde cero',
            price: '19.990',
            content: 'Curso completo de JavaScript',
            percent: '80%'
        },
        /*{
            courseId: 2,
            title: 'React',
            imageName: 'react.webp',  // Nombre del archivo
            description: 'Desarrolla aplicaciones con React',
            price: '24.990',
            content: 'Curso avanzado de React',
            percent: '90%'
        },
        {
            courseId: 3,
            title: 'Node.js',
            imageName: 'nodejs.webp',  // Nombre del archivo
            description: 'Backend con Node.js y Express',
            price: '21.990',
            content: 'Curso de Node.js para principiantes',
            percent: '85%'
        }*/
    ]

    return (
        <div className={'card-page'}>
            <div className={'cards'}>
                {courses.map((course) => (
                    <CardPage courseId={course.courseId}
                              courseTitle={course.title}
                              courseDescription={course.description}
                              coursePrice={course.price}
                              courseContent={course.content}
                              coursePercent={course.percent}
                    />
                ))}
            </div>
        </div>
    )
}