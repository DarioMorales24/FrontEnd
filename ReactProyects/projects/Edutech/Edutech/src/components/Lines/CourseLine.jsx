import './CourseLineStyles.css'

export const CourseLine = ({courseTitle, coursePrice, courseDescription}) => {
    return (<div className={'fondo'}>
        <div className="courses-lines">
            <h1>{courseTitle}</h1>
            <p>{courseDescription}</p>
            <button className={'btn_line'}>Ir al curso</button>
        </div>

    </div>
    )
}