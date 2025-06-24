let count =0;

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}
function checkCountValue() {
    if (count ==10) {
        alert("You have reached 10 followers");
    }
}