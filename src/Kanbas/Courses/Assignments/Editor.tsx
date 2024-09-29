export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            {/* Assignment Name */}
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input type="text" className="form-control" id="wd-name" value="A1" />
            </div>

            {/* Description */}
            <div className="mb-3">
                <textarea
                    className="form-control text-start"
                    id="wd-description"
                    rows={6}
                    style={{ lineHeight: "2", textAlign: "left" }} // Ensure line height and text alignment
                    defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following: 
• Your full name and section 
• Links to each of the lab assignments 
• Link to the Kanbas application 
• Links to all relevant source code repositories 
The Kanbas application should include a link to navigate back to the landing page.`}>
                </textarea>
            </div>


            {/* <div className="mb-3">
                <p className="text-start" style={{ lineHeight: "1.8" }}>
                    The assignment is <span style={{ color: "red" }}> available online.</span><br />
                    Submit a link to the landing page of your Web application running on Netlify.<br />
                    The landing page should include the following:
                </p>
                <ul className="text-start" style={{ lineHeight: "1.8" }}>
                    <li>Your full name and section</li>
                    <li>Links to each of the lab assignments</li>
                    <li>Link to the Kanbas application</li>
                    <li>Links to all relevant source code repositories</li>
                </ul>
                <p className="text-start" style={{ lineHeight: "1.8" }}>
                    The Kanbas application should include a link to navigate back to the landing page.
                </p>
            </div> */}

            {/* Points */}
            <div className="mb-3 row text-end">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="wd-points" value={100} />
                </div>
            </div>

            {/* Assignment Group */}
            <div className="mb-3 row text-end">
                <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
                <div className="col-sm-10">
                    <select className="form-select" id="wd-group">
                        <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                        <option value="DISCUSSIONS">DISCUSSIONS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </div>
            </div>

            {/* Display Grade As */}
            <div className="mb-3 row text-end">
                <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
                <div className="col-sm-10">
                    <select className="form-select" id="wd-display-grade-as">
                        <option value="Percentage" selected>Percentage</option>
                        <option value="Letter">Letter</option>
                    </select>
                </div>
            </div>

            {/* Submission Type */}
            <div className="mb-3 row text-end">
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                <div className="col-sm-10">
                    <div className="border p-3">
                        {/* Dropdown */}
                        <select className="form-select mb-2" id="wd-submission-type">
                            <option value="Online" selected>Online</option>
                            <option value="In-Person">In-Person</option>
                        </select>

                        {/* Checkboxes */}
                        <div className="mt-2 text-start">
                            <strong>Online Entry Options</strong>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-website-url" checked />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Assign */}
            <div className="mb-3 row text-end">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign</label>
                <div className="col-sm-10">
                    <div className="border p-3 text-start">

                        {/* Assign to */}
                        <strong>Assign to</strong>
                        <div className="form-control d-flex align-items-center">
                            <div className="d-inline-block bg-light border rounded px-3 py-1 me-2">
                                Everyone
                                <button type="button" className="btn-close ms-2" aria-label="Close"></button>
                            </div>
                            <input
                                type="text"
                                className="border-0 flex-grow-1"
                            />
                        </div>

                        {/* Due */}
                        <div className="mb-3 mt-3">
                            <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label> {/* Bold Due label */}
                            <input type="date" className="form-control" id="wd-due-date" value="2024-05-13" />
                        </div>

                        {/* Available From and Until */}
                        <div className="d-flex gap-3">
                            <div className="flex-grow-1">
                                <label htmlFor="wd-available-from" className="form-label fw-bold">Available From</label>
                                <input type="date" className="form-control" id="wd-available-from" value="2024-05-06" />
                            </div>

                            <div className="flex-grow-1">
                                <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                                <input type="date" className="form-control" id="wd-available-until" value="2024-05-20" />
                            </div>
                        </div>

                    </div>
                </div>

                <hr className="mt-5 my-4" />

                {/* Save and Cancel Buttons */}
                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-1">Cancel</button>
                    <button className="btn btn-danger me-1">Save</button>
                </div>
            </div>
        </div >
    );
}
