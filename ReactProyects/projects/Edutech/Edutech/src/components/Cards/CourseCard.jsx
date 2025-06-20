import "./CourseCardStyles.css"

export const CourseCard = ({ imageName, courseTitle, courseDescription, coursePrice }) => {
    return (
        <div className="course-card">
            <img src={`/images/img-courses/${imageName}`} alt={courseTitle} className="course-image" />
            <div className="course-details">
                <h2 className="course-title">{courseTitle}</h2>
                <p className="course-description">
                    {courseDescription}
                </p>
                <span className="course-price">${coursePrice}</span>
            </div>
        </div>
    );
}