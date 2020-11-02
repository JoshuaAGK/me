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

function moveSelfie(e) {
    const moveAmount = 20;
    var x = (e.clientX / window.innerWidth) - 0.5;
    var y = (e.clientY / window.innerHeight) - 0.5;
    var xOffset = x * moveAmount;
    var yOffset = y * moveAmount + 25;
    var selfie = document.getElementById("selfie").getElementsByTagName("img")[0];
    selfie.style.objectPosition = xOffset + "px " + yOffset + "px";
    var background = document.getElementById("selfie");
    background.style.backgroundPosition = xOffset * -0.75 + "px " + yOffset * -0.75 + "px";
}

function clearSelfie() {
    var selfie = document.getElementById("selfie").getElementsByTagName("img")[0];
    selfie.style.objectPosition = "0 25px";
    var background = document.getElementById("selfie");
    background.style.backgroundPosition = "0 0";
}