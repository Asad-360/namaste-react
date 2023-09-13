import React from "react";
import ReactDOM from "react-dom/client";

/** JSX is transpiled (which is done by parcel using the package known as BABEL)before it reaches to the javascript engine.
// JSX ==> React.CreateElement() using BABEL Transpiler


// React Components
// There are two types of components
// 1. Class based components ==> Old way 
// 2. Functional components  ==> New way

// 1. FUNCTIONAL COMPONENT
// JS Function that returns JSX (I-E React Element)
// This is better syntax with return type;

const HeadingComponent = () =>{
    return <h1>Namastay react using JSX through functional component....! 🚀</h1>;
};

const HeadingComponent2 = () =>(
     <h1>Namastay react using JSX through functional component2....! 🚀</h1>
);

const OneLinerComponent = ()=> <h1>Namastay react using JSX through functional component one liner....! 🚀</h1>;


// React Element
const ReactElementVariable = ( <h1>Namastay react using JSX through React Element....! 🚀</h1>);


// React Functional Component

const ReactFunctionalComponentVariable = () => ( <h1>Namastay react using JSX through functional component.... through react component variable! 🚀</h1>);


/**
 * Component Composition
 */

var ChildComponent = () => (<h2>This is child Component</h2>);
var ChildComponentThrouthFunction = function () { return (<h2>This is child Component</h2>)};
var ParentComponent = () => (
    <div>
        <h1>This is parent Component</h1><ChildComponentThrouthFunction/>
    </div>
    );

/**
 * React component Calling
 */
// create element
const TempComponent = ()=> (<div><h1>This is temp component</h1></div>);

const tempElement= (<div><h1>This is temp title element</h1><TempComponent></TempComponent></div>);
console.log(TempComponent())
console.log(tempElement)
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<ParentComponent/>);
root.render(tempElement);


