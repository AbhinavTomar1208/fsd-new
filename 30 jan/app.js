console.log("Hello");

const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent);

root.render(React.createElement("h3", {}, "Loading..."));

// Load first paragraph after 1 second
setTimeout(() => {
    const para1 = React.createElement("p", {}, "Welcome to React dev - First paragraph loaded!");
    root.render(para1);
}, 1000);

// Load second paragraph after 3 seconds total (1 + 2)
setTimeout(() => {
    const para1 = React.createElement("p", {}, "Welcome to React dev - First paragraph loaded!");
    const para2 = React.createElement("p", {}, "This is the second paragraph loaded after additional 2 seconds!");
    const div = React.createElement("div", {}, para1, para2);
    root.render(div);
}, 3000);
