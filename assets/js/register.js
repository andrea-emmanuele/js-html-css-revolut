let tel = $("#phone-number");
let select = $("#prefix");

let number = $(".number");
let prefix = $(".prefix");

let telLabel = $(".number > label");

let submit = $("#register");
let checking;

tel.focusin(function () {
    onfocusenter(number);
    telLabel.removeClass("onfocusout");
    telLabel.addClass("onfocusin");

    checking = setInterval(function () {
        if (tel.val().length == tel.attr("maxlength")) {
            submit.removeAttr("disabled");
            console.log("in");
        }
        else {
            submit.attr("disabled", true);
            console.log("out");
        }
    }, 100);
});

tel.focusout(function () {
    onfocusleave(number);

    if (!tel.val()) {
        telLabel.removeClass("onfocusin");
        telLabel.addClass("onfocusout");
    }

    clearInterval(checking);
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






