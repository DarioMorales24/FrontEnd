import './CardPagesStyles.css'

export const CardPage = ({ courseId, courseTitle, courseDescription, coursePrice, courseContent, coursePercent }) => {
    return (
        <div className='card-page'>
            <h1>{courseTitle}</h1>
            <div className='card-content'>
                <img src={`/assets/images/${courseId}.webp`} alt={courseTitle} />
                <div className='card-details'>
                    <p>Progreso: {coursePercent}</p>
                    <p>{courseDescription}</p>
                    <p>Precio: ${coursePrice}</p>
                    <p>Contenido: {courseContent}</p>
                </div>
            </div>
        </div>
    );
}