var isDebug = true;

document.querySelector("#astolfanon").addEventListener("click", function()
{
    window.location.href = "https://otkph.am";
});

function updateScene()
{
    let width = window.innerWidth,
        height = window.innerHeight,
        style = document.documentElement.style;

    style.setProperty("--scene-height", height + "px");
    style.setProperty("--scene-width", width + "px");
    style.setProperty("--anim-leftpos", width - 96 + "px");
    style.setProperty("--anim-toppos", height - 208 + "px");
}

function debug()
{
    let element = document.querySelector("#debug"),
        scene = document.querySelector("#scene").getBoundingClientRect(),
        obj = document.querySelector("#astolfanon").getBoundingClientRect(),
        axis = window.getComputedStyle(
            document.querySelector("#astolfanon"), null
        ).getPropertyValue('transform');

    element.innerHTML = "" +
    "<span>Window-H: " + window.innerHeight + "</span><br>" +
    "<span>Window-W: " + window.innerWidth + "</span><br>" +
    "<span>Scene-H: " + scene.height + "</span><br>" +
    "<span>Scene-W: " + scene.width + "</span><br>" +
    "<span>Obj-X: " + obj.x + "</span><br>" +
    "<span>Obj-Y: " + obj.y + "</span><br>" +
    "<span>Obj-Axis: " + axis + "</span><br>";
}

window.addEventListener("resize", owo);
window.addEventListener("load", owo);

owo();

if (
    isDebug == true
) {
    document.querySelector("#debug").classList.remove("hidden");
    setInterval(debug);
}