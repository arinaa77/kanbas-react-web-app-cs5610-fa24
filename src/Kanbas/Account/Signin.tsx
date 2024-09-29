import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="mb-2 ms-5">
            <h1>Signin</h1>

            {/* Username */}
            <input id="wd-username"
                placeholder="username"
                className="form-control mb-2"
                style={{ width: '300px' }} />

            {/* Password */}
            <input id="wd-password"
                placeholder="password" type="password"
                className="form-control mb-2" />

            {/* Signin */}
            <Link id="wd-signin-btn"
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100">
                Sign in </Link>

            {/* Signup */}
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Signup</Link>
        </div>
    );
}
