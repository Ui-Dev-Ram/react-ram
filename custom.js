const parent = React.createElement("div", {id: "parent"}, 
 [React.createElement("div",{id: "child"},
 [React.createElement("h1",{class: "h1"}, "hello this is heading one"),
 React.createElement("h2",{class: "h2"}, "hello this is heading two") ]),

 React.createElement("div",{id: "child2"},
 [React.createElement("h1",{class: "h1"}, "hello this is heading one"),
 React.createElement("h2",{class: "h2"}, "hello this is heading two") ])
 
 ])



// const heading = React.createElement("h1", {id: "head", class: "heading"}, "Hello From React");
        
const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);