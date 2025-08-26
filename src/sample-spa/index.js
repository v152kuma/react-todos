window.onload = function() {
    const root = document.getElementById("root");
    root.innerHTML = "<h1>This is coming from index.js</h1>";

    const button  = document.createElement("button");
    button.innerText = "Click Me";
    button.onclick = function() {
        alert("Button was clicked!");
    };
    root.appendChild(button);
};

