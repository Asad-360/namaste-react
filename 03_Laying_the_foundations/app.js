import React from 'react';
import ReactDOM from 'react-dom/client';

const ele = React.createElement("div",{id:"heading"},
[React.createElement("div" ,{id:"parent"},[
    React.createElement("div",{},"Inside div d"),
    React.createElement("div",{},"Inside div2")
]),React.createElement("div",{id:"parentsibling"},[
    React.createElement("div",{},"Inside div"),
    React.createElement("div",{},"Inside div2")
])
]);
console.log(ele);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);