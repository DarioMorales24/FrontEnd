import './DashboardPageStyles.css'
import {CourseCard} from "../../components/Cards/CourseCard.jsx";

export const DashboardPage = () => {
    const courses = [
        {
            title: 'Java',
            imageName: 'java.webp',
            description: 'Aprende Java desde cero',
            price: '14.990'
        },
        {
            title: 'Database',
            imageName: 'database.webp',
            description: 'Aprende bases de datos desde cero',
            price: '14.990'
        },
        {
            title: 'JavaScript',
            imageName: 'js.webp',
            description: 'Aprende JavaScript desde cero',
            price: '14.990'
        },
        {
            title: 'Python',
            imageName: 'python.webp',
            description: 'Aprende Python desde cero',
            price: '14.990'
        },
        {
            title: 'React',
            imageName: 'react.webp',
            description: 'Aprende React de forma práctica',
            price: '19.990'
        },
        {
            title: 'Node.js',
            imageName: 'nodejs.webp',
            description: 'Aprende backend con Node.js',
            price: '16.990'
        },
        {
            title: 'HTML & CSS',
            imageName: 'html-css.webp',
            description: 'Crea páginas web desde cero',
            price: '9.990'
        },
        {
            title: 'Angular',
            imageName: 'angular.webp',
            description: 'Fundamentos de Angular para principiantes',
            price: '18.990'
        },
        {
            title: 'Machine Learning',
            imageName: 'machine.webp',
            description: 'Introducción al aprendizaje automático y sus aplicaciones.',
            price: '24.990'
        }
    ];

    return (
        <div className="dashboard-page">
            <div className={'courses-section'}>
                <h1 className="dashboard-title">Cursos Disponibles</h1>
                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            imageName={course.imageName}
                            courseTitle={course.title}
                            courseDescription={course.description}
                            coursePrice={course.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}