let currentNode;
let idcount = 0;

function start() {
    document
        .getElementById("byIdButton")
        .addEventListener("click", byId, false);
    document
        .getElementById("insertButton")
        .addEventListener("click", insert, false);
    document
        .getElementById("appendButton")
        .addEventListener("click", appendNode, false);
    document
        .getElementById("replaceButton")
        .addEventListener("click", replaceCurrent, false);
    document
        .getElementById("removeButton")
        .addEventListener("click", remove, false);
    document
        .getElementById("parentButton")
        .addEventListener("click", parent, false);

    currentNode = document.getElementById("heading1");
}

window.addEventListener("load", start, false);
function byId() {
    let id = document.getElementById("gbi").value;
    let target = document.getElementById(id);
    if (target) switchTo(target);
}

function insert() {
    let newNode = createNewNode(document.getElementById("ins").value);
    currentNode.parentNode.insertBefore(newNode, currentNode);
    switchTo(newNode);
}

function appendNode() {
    let newNode = createNewNode(document.getElementById("append").value);
    currentNode.appendChild(newNode);
    switchTo(newNode);
}

function replaceCurrent() {
    let newNode = createNewNode(document.getElementById("replace").value);
    currentNode.parentNode.replaceChild(newNode, currentNode);
    switchTo(newNode);
}

function remove() {
    if (currentNode.parentNode == document.body)
        alert("Can't remove a top-level element.");
    else {
        let oldNode = currentNode;
        switchTo(oldNode.parentNode);
        currentNode.removeChild(oldNode);
    }
}

function parent() {
    let target = currentNode.parentNode;
    if (target != document.body) switchTo(target);
    else alert("No parent.");
}

function createNewNode(text) {
    let newNode = document.createElement("p");
    nodeId = "new" + idcount++;
    newNode.setAttribute("id", nodeId);
    text = "[" + nodeId + "]" + text;
    newNode.appendChild(document.createTextNode(text));
    return newNode;
}

function switchTo(newNode) {
    currentNode.setAttribute("class", "");
    currentNode = newNode;
    currentNode.setAttribute("class", "highlighted");
    document.getElementById("gbi").value = currentNode.getAttribute("id");
}
