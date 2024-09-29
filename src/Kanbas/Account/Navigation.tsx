import { Link, useLocation } from "react-router-dom";
import '../styles.css';

export default function AccountNavigation() {
    const location = useLocation();

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {/* Signin */}
            <Link to="/Kanbas/Account/Signin" id="wd-account-signin-link"
                className={`list-group-item border border-0 ${location.pathname === '/Kanbas/Account/Signin' ? 'active' : ''}`}>
                Signin
            </Link>

            {/* Signup */}
            <Link to="/Kanbas/Account/Signup" id="wd-account-signup-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Account/Signup' ? 'active' : ''}`}>
                Signup
            </Link>


            {/* Profile */}
            <Link to="/Kanbas/Account/Profile" id="wd-account-profile-link"
                className={`list-group-item text-danger border border-0 ${location.pathname === '/Kanbas/Account/Profile' ? 'active' : ''}`}>
                Profile
            </Link>
        </div>
    );
}
