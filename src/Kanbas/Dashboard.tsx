import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                {/* CS1234 React JS */}
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* CS5001 Fundation of Computer Science */}
                <div className="wd-dashboard-course">
                    <img src="/images/cs5001.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS5001 Fundation of Computer Science
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Fundation of Computer Science
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* CS5002 Discrete Math */}
                <div className="wd-dashboard-course">
                    <img src="/images/cs5002.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS5002 Discrete Math
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Discrete Math
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* CS5004 Object Oriented Design */}
                <div className="wd-dashboard-course">
                    <img src="/images/cs5004.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS5004 Object Oriented Design
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Object Oriented Design
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* CS5008 Data Structure */}
                <div className="wd-dashboard-course">
                    <img src="/images/cs5008.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS5008 Data Structure
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Data Structure
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* CS5800 Algorithm */}
                <div className="wd-dashboard-course">
                    <img src="/images/cs5800.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS5800 Algorithm
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Algorithm
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* CS5200 Database Management */}
                <div className="wd-dashboard-course">
                    <img src="/images/cs5200.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS5200 Database Management
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Database Management
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* CS6620 Cloud Computing */}
                <div className="wd-dashboard-course">
                    <img src="/images/cs6620.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS6620 Cloud Computing
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Cloud Computing
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
