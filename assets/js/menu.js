$(function () {
    dropdown();
});

function dropdown() {
    let items = $(".right > .menu-item");
    let dropMenu;
    console.log(items);

    items.mouseenter(function () {
        dropMenu = $(".drop-menu");
        dropMenu.eq(items.index(this)).addClass("active");
        console.log(items.index(this));
    });

    items.mouseleave(function () {
        dropMenu = $(".drop-menu");
        dropMenu.eq(items.index(this)).removeClass("active");
        console.log(items.index(this));
    });

    dropMenu = $(".drop-menu");

    dropMenu.mouseenter(function () {
        dropMenu.eq(items.index(this)).addClass("active");
        console.log(items.index(this));
    });

    items.mouseleave(function () {
        dropMenu = $(".drop-menu");
        dropMenu.eq(items.index(this)).removeClass("active");
        console.log(items.index(this));
    });
}