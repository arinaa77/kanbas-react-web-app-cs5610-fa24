import "./index.css";
import ForegroundColors from './ForegroundColors';
import BackgroundColors from './BackgroundColors';
import Borders from './Borders';
import Padding from './Padding';
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForm from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";


export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>

            {/* 3.1.1 Styling elements with the style attribute */}
            {/* 3.1.2 Importing CSS documents */}
            <h3>Styling with the STYLE attribute</h3>
            <p
            // style={{
            //     backgroundColor: "blue",
            //     color: "white"
            // }}
            >
                Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>

            {/* 3.1.3 Selecting content with ID selectors */}
            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the
                    elements of the same name, e.g., P, we can refer to a specific element by its ID
                </p>
                <p id="wd-id-selector-2">
                    Here's another paragraph using a different ID and a different look and
                    feel
                </p>
            </div>

            {/* 3.1.4 Selecting content with class selectors */}
            <div id="wd-css-class-selectors">
                <h3>Class selectors</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an element's CLASS attribute
                </p>
                <h4 className="wd-class-selector">
                    This heading has same style as paragraph above
                </h4>
            </div>

            {/* 3.1.5 Selecting content based on the document structure */}
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular
                        places in the document
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br />
                            .selector-2 .selector3<br />
                            meaning the descendant of some ancestor.<br />
                            <span className="wd-selector-4">
                                Whereas this span is a direct child of its parent
                            </span><br />
                            You can combine these relationships to create specific
                            styles depending on the document structure
                        </p>
                    </div>
                </div>
            </div>

            {/* 3.1.7 Styling the foreground color */}
            <div>
                <ForegroundColors />
            </div>

            {/* 3.1.8 Styling the background color */}
            <div>
                <BackgroundColors />
            </div>

            {/* 3.1.9 Styling borders */}
            <div>
                <Borders />
            </div>

            {/* 3.1.10 Styling margins and paddings */}
            <div>
                <Padding />
            </div>
            <div>
                <Margins />
            </div>

            {/* 3.1.11 Styling corners */}
            <div>
                <Corners />
            </div>

            {/* 3.1.12 Styling dimensions */}
            <div>
                <Dimensions />
            </div>

            {/* 3.1.13 Styling relative position */}
            {/* 3.1.14 Styling absolute position */}
            {/* 3.1.15 Styling fixed position */}
            <div>
                <Positions />
            </div>

            {/* 3.1.16 Styling z-index */}
            <div>
                <Zindex />
            </div>

            {/* 3.1.17 Floating Images and Content */}
            <div>
                <Float />
            </div>

            {/* 3.1.18 Laying out content in a grid */}
            <div>
                <GridLayout />
            </div>

            {/* 3.1.19 Flex */}
            <div>
                <Flex />
            </div>

            {/* 3.2 Decorating Documents with React Icons */}
            <div>
                <ReactIconsSampler />
            </div>

            {/* 3.3.3 Laying out content with grids */}
            {/* 3.3.4 Responsive Grids */}
            <div>
                <BootstrapGrids />
            </div>

            {/* 3.3.5 Hiding and showing responsive content */}
            <div>
                <ScreenSizeLabel />
            </div>

            {/* 3.3.6 Styling tables */}
            {/* 3.3.7 Making tables responsive */}
            <div>
                <BootstrapTables />
            </div>

            {/* 3.3.8 Styling Lists */}
            {/* 3.3.9 Styling a List of Hyperlinks */}
            <div>
                <BootstrapLists />
            </div>

            {/* 3.3.10 Basic Form Styling */}
            {/* 3.3.11 Styling Dropdowns */}
            {/* 3.3.12 Styling Switches */}
            {/* 3.3.13 Styling Range and Sliders */}
            {/* 3.3.14 Styling Addons */}
            {/* 3.3.15 Responsive Forms */}
            <div>
                <BootstrapForm />
            </div>

            {/* 3.3.16 Navigating with Tabs */}
            {/* 3.3.18 Navigating with cards */}
            <div>
                <BootstrapNavigation />
            </div>













        </div>
    );
}
