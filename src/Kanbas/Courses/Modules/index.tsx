import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import { BsGripVertical } from 'react-icons/bs';


export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {/* Week 1 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1
                        <ModuleControlButtons />
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        {/* LEARNING OBJECTIVES */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                LEARNING OBJECTIVES
                            </div>
                            <LessonControlButtons />
                        </li>

                        {/* Introduction to the course */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                Introduction to the course
                            </div>
                            <LessonControlButtons />
                        </li>

                        {/* Learn what is Web Development */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                Learn what is Web Development
                            </div>
                            <LessonControlButtons />
                        </li>

                        {/* LESSON 1 */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                LESSON 1
                            </div>
                            <LessonControlButtons />
                        </li>

                        {/* LESSON 2 */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                LESSON 2
                            </div>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>

                {/* Week 2 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 2
                        <ModuleControlButtons />
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        {/* LEARNING OBJECTIVES */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                LEARNING OBJECTIVES
                            </div>
                            <LessonControlButtons />
                        </li>

                        {/* LESSON 1 */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                LESSON 1
                            </div>
                            <LessonControlButtons />
                        </li>

                        {/* LESSON 2 */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-4" />
                                LESSON 2
                            </div>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
