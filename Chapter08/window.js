let childWindow;
function createChildWindow() {
    let toolBar, menuBar, location, scrollBars, status, resizable;
    toolBar = toolBarCheckBox.checked ? "yes" : "no";
    menuBar = menuBarCheckBox.checked ? "yes" : "no";
    location = locationCheckBox.checked ? "yes" : "no";
    scrollBars = scrollBarsCheckBox.checked ? "yes" : "no";
    status = statusCheckBox.checked ? "yes" : "no";
    resizable = resizableCheckBox.checked ? "yes" : "no";

    childWindow = window.open(
        "",
        "_blank",
        "resizable=" +
            resizable +
            ", toolbar=" +
            toolBar +
            ", menubar=" +
            menubar +
            ", status=" +
            status +
            ", location=" +
            location +
            ", scrollbars=" +
            scrollBars
    );
    closeButton.disabled = false;
    modifyButton.disabled = false;
    setURLButton.disabled = false;
}
function modifyChildWindow() {
    if (childWindow.closed)
        alert("You attempted to interact with a closed window");
    else childWindow.document.write(textForChild.value);
}
function closeChildWindow() {
    if (childWindow.closed)
        alert("You attempted to interact with a closed window");
    else childWindow.close();

    closeButton.disabled = true;
    modifyButton.disabled = true;
    setURLButton.disabled = true;
}
function setChildWindowURL() {
    if (childWindow.closed)
        alert("You attempted to interact with a closed window");
    else childWindow.location = myChildURL.value;
}
