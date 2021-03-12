$(function () {
    dropdown();
});

function dropdown() {
    let items = $(".right > .menu-item");
    let dropMenu;

    items.mouseenter(function () {
        dropMenu = $(".drop-menu");
        dropMenu.eq(items.index(this)).addClass("active");
    });

    items.mouseleave(function () {
        dropMenu = $(".drop-menu");
        dropMenu.eq(items.index(this)).removeClass("active");
    });
}