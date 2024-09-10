function houdini(name) {
    $("#" + name).fadeOut("slow");
    $("." + name).fadeOut("slow");
}

$(document).ready(function () {
    $("#houdini-btn").click(function () {
        const name = $("#name-input").val();
        if (name) {
            houdini(name);
        }
    });
});
