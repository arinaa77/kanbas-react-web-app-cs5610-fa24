import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";


export default function Lab3() {
    console.log('Hello World!');
    return (
        <div id="wb-lab3" className="container-fluid">
            <h2>Lab 3</h2>

            {/* 2.2.1 Variables and Constants */}
            <VariablesAndConstants />

            {/* 2.2.2 Variable Types */}
            <VariableTypes />

            {/* 2.2.3 Boolean Variables */}
            <BooleanVariables />

            {/* 2.2.4 Conditionals */}
            <IfElse />

            {/* 2.2.5 Ternary Conditional Operator */}
            <TernaryOperator />

            {/* 2.2.6 Generating conditional output */}
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />

            <LegacyFunctions />

            {/* 2.3.1 Arrow functions */}
            <ArrowFunctions />

            {/* 2.3.2 Implied returns */}
            <ImpliedReturn />

            {/* 2.3.3 Template Literals */}
            <TemplateLiterals />

            {/* 2.4 JavaScript Data Structures */}
            <SimpleArrays />

            {/* 2.4.1 Array index and length */}
            <ArrayIndexAndLength />

            {/* 2.4.2 Adding and Removing Data to/from Arrays */}
            <AddingAndRemovingToFromArrays />

            {/* 2.4.3 For Loops */}
            <ForLoops />

            {/* 2.4.4 The Map Function */}
            <MapFunction />

            {/* 2.4.5 The Find Function */}
            <FindFunction />

            {/* 2.4.6 The Find Index Function */}
            <FindIndex />

            {/* 2.4.7 The Filter Function */}
            <FilterFunction />

            {/* 2.4.8 JSON Stringify */}
            <JsonStringify />

            {/* 2.4.9 JavaScript Object Notation (JSON) */}
            <House />

            {/* 2.4.10 Rendering a Data Structure */}
            <TodoList />

            {/* 2.4.11 The Spread Operator */}
            <Spreading />

            {/* 2.4.12 Destructing */}
            <Destructing />

            {/* 2.4.13 Destructing Function Parameters */}
            <FunctionDestructing />

            {/* 2.4.14 Destructing Imports */}
            <DestructingImports />

            {/* 2.5.1 Working with HTML classes */}
            <Classes />

            {/* 2.5.2 Working with the HTML Style attribute */}
            <Styles />

            {/* 2.6 Parameterizing Components */}
            <Add a={3} b={4} />

            {/* 2.6.1 Child Components */}
            <h4>Square of 4</h4>
            <Square>4</Square>
            <hr />

            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>

            {/* 2.6.3 Encoding Path Parameters */}
            <PathParameters />







        </div>
    );
}
