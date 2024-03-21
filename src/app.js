import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// const heading = React.createElement("h1", {id: "heading"}, "hello world from react sonu////// "); 
// console.log("heading",heading); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(heading);



/*
<div id="parent">
   <div id="child-1">
      <h1>
      I am Gulafshan
      </h1>
   </div>
</div>
 */



// const parent = React.createElement("div",{id:"child-1"},
// React.createElement("h1",{}, "I am Gulafshan")
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(parent);

/*
<div id="parent">
   <div id="child-1">
      <h1>
      I am Gulafshan
      </h1>
      <h2>
      I am Saksham
      </h2>
   </div>
</div>
 */


// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child-1"},
// [React.createElement("h1",{}, "I am Gulafshan") , React.createElement("h2",{}, "I am Saksham")]
// ));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(parent);


/*
<div id="parent">
   <div id="child-1">
      <h1>
      I am Gulafshan
      </h1>
      <h2>
      I am Saksham
      </h2>
   </div>

   <div id="child-2">
      <h1>
      I am Gulafshan
      </h1>
      <h2>
      I am Saksham
      </h2>
   </div>
</div>
 */

// const parent = React.createElement("div",{id:"parent"},
// [
//     React.createElement("div",{id:"child-1"},
//      [React.createElement("h1",{}, "I am Gulafshan") , React.createElement("h2",{}, "I am Saksham")]
//    ),
//    React.createElement("div",{id:"child-2"},
//      [React.createElement("h1",{}, "I am Gulafshan") , React.createElement("h2",{}, "I am Saksham")]
//    )
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(parent);

/* jsx is nothing but a html code */
// const jsxHeading = <h1 className="heading" id="heading" >This is jsx</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);



/* function component */



const AppComponent =()=>{
   return(
      <div className="app">
         <Header/>
         <Body/>

      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppComponent />);