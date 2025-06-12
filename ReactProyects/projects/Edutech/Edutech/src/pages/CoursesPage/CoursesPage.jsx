import "./CoursesPageStyles.css"
import { CourseCard } from "../../components/Cards/CourseCard.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx";

export const CoursesPage = () => {
    return (
        <div className={'page-container'}>

            <Navbar/>
            <CourseCard
                courseTitle={'Java'}
                courseDescription={'Aprende Java desde cero'}
                coursePrice={'14.990'}
            />
            <CourseCard
                courseTitle={'database'}
                courseDescription={'Aprende Java desde cero'}
                coursePrice={'14.990'}
            />
        </div>


    )
}