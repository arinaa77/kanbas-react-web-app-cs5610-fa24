import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen" className="mb-2 ms-5">
            <h1>Signup</h1>

            {/* Username */}
            <input id="wd-username"
                placeholder="username"
                className="form-control mb-2"
                style={{ width: '300px' }} />

            {/* Password */}
            <input id="wd-password"
                placeholder="password" type="password"
                className="form-control mb-2" />

            {/* Signup */}
            <Link id="wd-signup-btn"
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100">
                Signup </Link>

            {/* Signin */}
            <Link id="wd-signin-link" to="/Kanbas/Account/Signin">Signin</Link>
        </div>
    );
}
