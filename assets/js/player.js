let playBtn = $(".play-btn");
let closeBtn = $(".close");
let overlay = $(".overlay");

playBtn.click(function () {
    overlay.css("display", "flex");
    $("body").css("overflow-y", "hidden");
});

closeBtn.click(function () {
    overlay.css("display", "none");
    $("body").css("overflow-y", "visible");
});