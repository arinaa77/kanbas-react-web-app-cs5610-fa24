import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
    const location = useLocation();

    return (
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">


            {/* Link to NEU */}
            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" alt="NEU logo" /></a>

            {/* Link to Account */}
            <NavLink to="/Kanbas/Account" id="wd-account-link" className="list-group-item text-center border-0" style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : 'black',
                color: isActive ? 'red' : 'white'
            })}>
                <FaRegCircleUser className="fs-1" /><br />Account
            </NavLink>

            {/* Link to Dashboard */}
            <NavLink
                to="/Kanbas/Dashboard"
                id="wd-dashboard-link"
                className="list-group-item text-center border-0"
                style={({ isActive }) => ({
                    backgroundColor: isActive && location.pathname === '/Kanbas/Dashboard' && !location.search.includes('from=courses') ? 'white' : 'black',
                    color: isActive && location.pathname === '/Kanbas/Dashboard' && !location.search.includes('from=courses') ? 'red' : 'white'
                })}
            >
                <AiOutlineDashboard className="fs-1" style={{ color: 'red' }} />
                <br />Dashboard
            </NavLink>


            {/* Link to Dashboard from Course*/}
            <NavLink
                to={{ pathname: "/Kanbas/Dashboard", search: "?from=courses" }}
                id="wd-course-link"
                className="list-group-item text-center border-0"
                style={({ isActive }) => ({
                    backgroundColor: location.search.includes('from=courses') ? 'white' : 'black',
                    color: location.search.includes('from=courses') ? 'red' : 'white'
                })}
            >
                <LiaBookSolid className="fs-1" style={{ color: 'red' }} />
                <br />Courses
            </NavLink>

            {/* Link to Calendar */}
            <NavLink to="/Kanbas/Calendar" id="wd-calendar-link" className="list-group-item text-center border-0" style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : 'black',
                color: isActive ? 'red' : 'white'
            })}>
                <IoCalendarOutline className="fs-1" style={{ color: 'red' }} /> {/* Icon is red */}
                <br />Calendar
            </NavLink>

            {/* Link to Inbox */}
            <NavLink to="/Kanbas/Inbox" id="wd-inbox-link" className="list-group-item text-center border-0" style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : 'black',
                color: isActive ? 'red' : 'white'
            })}>
                <FaInbox className="fs-1" style={{ color: 'red' }} /> {/* Icon is red */}
                <br />Inbox
            </NavLink>

            {/* Link to Labs */}
            <NavLink to="/Labs" id="wd-labs-link" className="list-group-item text-center border-0" style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : 'black',
                color: isActive ? 'red' : 'white'
            })}>
                <LiaCogSolid className="fs-1" style={{ color: 'red' }} /> {/* Icon is red */}
                <br />Labs
            </NavLink>
        </div>
    );
}
