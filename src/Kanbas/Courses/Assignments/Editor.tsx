export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            {/* wd-name */}
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea
                id="wd-description"
                defaultValue={'The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.'}
                rows={9}
                style={{ width: '100%' }}
            />
            <br />
            <br />

            <table>
                {/* wd-points */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />

                {/* wd-group */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group"> Assignment Group </label><br />
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="DISCUSSIONS">QUIZZES</option>
                            <option value="QUIZZES">EXAMS</option>
                            <option value="QUIZZES">PROJECT</option>
                        </select></td>
                </tr>
                <br />

                {/* wd-display-grade-as */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label><br />
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">Percentage</option>
                            <option value="Letter">Letter</option>
                        </select>
                    </td>
                </tr>
                <br />

                {/* wd-submission-type */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type"> Submission Type </label><br />
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="In-Person">In Person</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td></td>
                    <td>
                        <label>Online Entry Options</label><br />
                        {/* wd-text-entry */}
                        <input type="checkbox" name="check-option" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        {/* wd-website-url */}
                        <input type="checkbox" name="check-option" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        {/* wd-media-recordings */}
                        <input type="checkbox" name="check-option" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        {/* wd-student-annotation */}
                        <input type="checkbox" name="check-option" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        {/* wd-file-upload */}
                        <input type="checkbox" name="check-option" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label><br />
                    </td>
                </tr>
                <br />

                {/* Assign */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        {/* wd-assign-to */}
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input id="wd-assign-to" value='Everyone' /><br /><br />
                    </td>
                </tr>

                {/* wd-due-date */}
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label><br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br /><br />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    {/* wd-available-from */}
                    <td>
                        <label htmlFor="wd-available-from">Available from</label><br />
                        <input type="date"
                            id="wd-available-from"
                            value="2024-05-06" />
                    </td>
                    {/* wd-available-until */}
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br />
                        <input type="date"
                            id="wd-available-until"
                            value="2024-05-20" />
                    </td>
                </tr>
            </table >
        </div >
    );
}
