import { FaSearch, FaPlus, FaEllipsisV, FaCheckCircle, FaFileAlt, FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Assignments() {
    return (
        <div className="container mt-4" id="wd-assignments">
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* Search Bar*/}
                <div className="input-group w-50">
                    <span className="input-group-text bg-white">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                    />
                </div>

                {/* Group and Assignment Buttons*/}
                <div className="d-flex justify-content-end">
                    {/* Group Button */}
                    <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1">
                        <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                        Group
                    </button>
                    {/* Assignment Button */}
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1">
                        <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                        Assignment
                    </button>
                </div>
            </div>

            {/* Assignments */}
            <ul id="wd-assignments" className="list-group rounded-0">
                {/* Title */}
                <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        {/* Left Section */}
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaCaretDown className="me-2 fs-4" />
                            <strong>ASSIGNMENTS</strong>
                        </div>
                        {/* Right Section */}
                        <div className="d-flex align-items-center">
                            <span className="badge rounded-pill border border-dark text-dark me-3 px-3 py-2" style={{ backgroundColor: 'transparent' }}>
                                40% of Total
                            </span>
                            <BsPlus className="fs-2" />
                            <IoEllipsisVertical className="fs-4 ms-3" />
                        </div>
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        {/* A1 */}
                        <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: '4px solid green' }}>
                            {/* Icons */}
                            <div className="d-flex">
                                <BsGripVertical className="me-2 fs-4" />
                                <FaFileAlt className="me-2 fs-4 text-success" />
                            </div>
                            {/* Details */}
                            <div>
                                <div className="d-flex">
                                    <Link to="/Kanbas/Courses/1234/Assignments/123" className="fs-5 me-2"
                                        style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                        A1
                                    </Link>
                                </div>
                                <p className="text-muted mb-1">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <b> Not available until</b> May 6 at 12:00am |
                                    <b> Due</b> May 13 at 11:59pm | 100 pts
                                </p>
                            </div>
                            {/* Buttons */}
                            <div className="d-flex align-items-center">
                                <FaCheckCircle className="text-success me-3 fs-5" />
                                <FaEllipsisV className="text-secondary" />
                            </div>
                        </li>

                        {/* A2 */}
                        <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: '4px solid green' }}>
                            {/* Icons */}
                            <div className="d-flex">
                                <BsGripVertical className="me-2 fs-4" />
                                <FaFileAlt className="me-2 fs-4 text-success" />
                            </div>
                            {/* Details */}
                            <div>
                                <div className="d-flex">
                                    <Link to="/Kanbas/Courses/1234/Assignments/124" className="fs-5 me-2"
                                        style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                        A2
                                    </Link>
                                </div>
                                <p className="text-muted mb-1">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <b> Not available until</b> May 13 at 12:00am |
                                    <b> Due</b> May 20 at 11:59pm | 100 pts
                                </p>
                            </div>
                            {/* Buttons */}
                            <div className="d-flex align-items-center">
                                <FaCheckCircle className="text-success me-3 fs-5" />
                                <FaEllipsisV className="text-secondary" />
                            </div>
                        </li>

                        {/* A3 */}
                        <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: '4px solid green' }}>
                            {/* Icons */}
                            <div className="d-flex">
                                <BsGripVertical className="me-2 fs-4" />
                                <FaFileAlt className="me-2 fs-4 text-success" />
                            </div>
                            {/* Details */}
                            <div>
                                <div className="d-flex">
                                    <Link to="/Kanbas/Courses/1234/Assignments/124" className="fs-5 me-2"
                                        style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                        A3
                                    </Link>
                                </div>
                                <p className="text-muted mb-1">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <b> Not available until</b> May 20 at 12:00am |
                                    <b> Due</b> May 27 at 11:59pm | 100 pts
                                </p>
                            </div>
                            {/* Buttons */}
                            <div className="d-flex align-items-center">
                                <FaCheckCircle className="text-success me-3 fs-5" />
                                <FaEllipsisV className="text-secondary" />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}