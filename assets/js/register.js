let tel = $("#phone-number");
let select = $("#prefix");

let number = $(".number");
let prefix = $(".prefix");

let telLabel = $(".number > label");

tel.focusin(function () {
    onfocusenter(number);
    telLabel.removeClass("onfocusout");
    telLabel.addClass("onfocusin");
});

tel.focusout(function () {
    onfocusleave(number);
    if (!tel.val()) {
        telLabel.removeClass("onfocusin");
        telLabel.addClass("onfocusout");
    }
});

select.focusin(function () {
    onfocusenter(prefix);
    $(".prefix > svg").css("transform", "translateY(-50%) rotateX(360deg) rotateZ(90deg)");
});

select.focusout(function () {
    onfocusleave(prefix);
    $(".prefix > svg").css("transform", "translateY(-50%) rotateX(180deg) rotateZ(90deg)");
});

function onfocusenter(element) {
    element.removeClass("onfocusout");
    element.addClass("onfocusin");
}

function onfocusleave(element) {
    element.removeClass("onfocusin");
    element.addClass("onfocusout");
}






