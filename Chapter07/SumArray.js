function start() {
    let theArray = [1, 2, 3, 4, , 6, 7];
    let total1 = 0,
        total2 = 0,
        total3 = 0;

    for (let i = 0; i < theArray.length; i++) total1 += theArray[i];
    let results = "<p>Total using indices: " + total1 + "</p>";

    for (let key in theArray) total2 += theArray[key];
    results += "<p>Total using for...in: " + total2 + "</p>";

    for (let value of theArray) total3 += value;
    results += "<p>Total using for...of: " + total3 + "</p>";

    document.getElementById("output").innerHTML = results;
}
window.addEventListener("load", start, false);
