import { Link, useLocation } from "react-router-dom";
import '../styles.css';

export default function CoursesNavigation() {
    const location = useLocation();

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {/* Home */}
            <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
                className={`list-group-item border border-0 ${location.pathname === '/Kanbas/Courses/1234/Home' ? 'active' : ''}`}>
                Home
            </Link>

            {/* Modules */}
            <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Courses/1234/Modules' ? 'active' : ''}`}>
                Modules
            </Link>

            {/* Piazza */}
            <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Courses/1234/Piazza' ? 'active' : ''}`}>
                Piazza
            </Link>

            {/* Zoom */}
            <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Courses/1234/Zoom' ? 'active' : ''}`}>
                Zoom
            </Link>

            {/* Assignments */}
            <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Courses/1234/Assignments' ? 'active' : ''}`}>
                Assignments
            </Link>

            {/* Quizzes */}<Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Courses/1234/Quizzes' ? 'active' : ''}`}>
                Quizzes
            </Link>

            {/* Grades */}
            <Link to="/Kanbas/Courses/1234/Grades" id="wd-course-grades-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Courses/1234/Grades' ? 'active' : ''}`}>
                Grades
            </Link>

            {/* People */}
            <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Courses/1234/People' ? 'active' : ''}`}>
                People
            </Link>
        </div>
    );
}
