var debug = false;

document.querySelector("#astolfanon").addEventListener("click", function()
{
    window.location.href = "https://otkph.am";
});

function owo()
{
    var width = window.innerWidth,
        height = window.innerHeight;

    var style = document.querySelector("style#custom");

    style.innerHTML = ":root {" +
    "--scene-height: " + height + "px;" +
    "--scene-width: " + width + "px;" +
    "--anim-leftpos: " + (width - 96) + "px;" +
    "--anim-toppos: " + (height - 208) + "px;" +
    "}";
}

function _debug()
{
    var element = document.querySelector("#debug"),
        screen = document.querySelector("#scene").getBoundingClientRect(),
        obj = document.querySelector("#astolfanon").getBoundingClientRect(),
        axis = window.getComputedStyle(
            document.querySelector("#astolfanon"), null
        ).getPropertyValue('transform');

    element.innerHTML = "" +
    "<span>Window-H: " + window.innerHeight + "</span><br>" +
    "<span>Window-W: " + window.innerWidth + "</span><br>" +
    "<span>Scene-H: " + screen.height + "</span><br>" +
    "<span>Scene-W: " + screen.width + "</span><br>" +
    "<span>Obj-X: " + obj.x + "</span><br>" +
    "<span>Obj-Y: " + obj.y + "</span><br>" +
    "<span>Obj-Axis: " + axis + "</span><br>" +
    "<span>Orientation: " + window.orientation + "</span>"; // works only on mobile devices
}

window.onresize = owo;
window.onload = owo;

if (
    debug == true
) {
    document.querySelector("#debug").style.display = "block";
    setInterval(_debug);
}