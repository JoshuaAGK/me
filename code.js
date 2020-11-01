function keyDown(e) {
    var key = event.which || event.keyCode;
    if (key == 13) {
        e.classList.add("keyDetails");
    }
    if (key == 9) {
        e.classList.remove("keyDetails");
    }
}

function keyUp(e) {
    var key = event.which || event.keyCode;
    if (key == 13) {
        e.classList.remove("keyDetails");
    }
}