function houdini() {
    $("p").fadeOut("slow");
}

$(document).ready(function () {
    $("#houdini-btn").click(function () {
        houdini();
    });
});
