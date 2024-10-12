import { Link, useLocation, useParams } from "react-router-dom";
import '../styles.css';

export default function CoursesNavigation() {
    const location = useLocation();
    const { cid } = useParams();

    const links = [
        { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
        { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
        { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
        { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
        { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
        { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
        { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
        { label: "People", path: `/Kanbas/Courses/${cid}/People` },
    ];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

            {/* Path for all */}
            {links.map((link) => (
                <Link
                    key={link.label}
                    to={link.path}
                    className={`list-group-item border-0 ${location.pathname === link.path ? 'active' : 'text-danger'}`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
