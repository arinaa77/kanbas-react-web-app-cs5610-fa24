import { Route, Routes, Navigate } from "react-router";

import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
    return (
        <div>
            <div className="container">
                <h1>Labs</h1>
                <p>Yihan Wang Section 01</p>
                <TOC />
                <Routes>
                    <Route path="/" element={<Navigate to="Lab1" />} />
                    <Route path="Lab1" element={<Lab1 />} />
                    <Route path="Lab2" element={<Lab2 />} />
                    <Route path="Lab3/*" element={<Lab3 />} />
                </Routes>
            </div>
        </div>
    );
}
