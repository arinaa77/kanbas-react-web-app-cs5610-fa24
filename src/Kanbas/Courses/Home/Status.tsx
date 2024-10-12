import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaBullhorn, FaChartLine, FaBell, FaStream, FaHome } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px", marginLeft: "50px", marginRight: "50px" }}>
            <h2>Course Status</h2>

            <div className="d-flex">
                {/* Unpublish */}
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
                </div>
                {/* Publish */}
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish </button>
                </div>
            </div>
            <br />

            {/* Import Existing Content */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content
            </button>

            {/* Import from Commons */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
            </button>

            {/* Choose Home Page */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaHome className="me-2 fs-5" /> Choose Home Page
            </button>

            {/* View Course Stream */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaStream className="me-2 fs-5" /> View Course Stream
            </button>

            {/* New Announcement */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaBullhorn className="me-2 fs-5" /> New Announcement
            </button>

            {/* New Analytics */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaChartLine className="me-2 fs-5" /> New Analytics
            </button>

            {/* View Course Notifications */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaBell className="me-2 fs-5" /> View Course Notifications
            </button>
        </div>
    );
}
