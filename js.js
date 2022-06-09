const sliderTop = $(".slider__top-row");
const sliderBottom = $(".slider__bottom-imgs");
const left = $(".slider__btn--left");
const right = $(".slider__btn--right");
let direction;

left.on("click", function() {
    direction = "left";
    sliderTop.css(
        "-webkit-transform",
        `translateX(-${sliderTop.children().first().width()}px)`
    );

    sliderBottom.css(
        "-webkit-transform",
        `translateX(-${sliderBottom.children().first().width()}px)`
    );
});

right.on("click", function() {
    direction = "right";
    $(".slider__bottom-imgs img")
        .last()
        .css({
            "-webkit-transform": `translate(${sliderBottom
        .children()
        .last()
        .width()}px)`,
        });

    sliderBottom.css(
        "-webkit-transform",
        `translateX(${sliderBottom.children().last().width()}px)`
    );

    $(".slider__top-row img")
        .last()
        .css({
            "-webkit-transform": `translate(${sliderTop
        .children()
        .last()
        .width()}px)`,
        });
    sliderTop.css(
        "-webkit-transform",
        `translateX(${sliderTop.children().last().width()}px)`
    );
});

sliderTop.bind("transitionend", function() {
    sliderTransitionEnd(sliderTop, direction);
});

sliderBottom.bind("transitionend", function() {
    sliderTransitionEnd(sliderBottom, direction);
});

function sliderTransitionEnd(slider, direction) {
    if (direction === "right") {
        slider.prepend(slider.children().last());
        $(`.${slider.attr("class")} img`)
            .first()
            .css("-webkit-transform", `translateX(0)`);
    } else {
        slider.append(slider.children().first());
        $(`.${slider.attr("class")} img`)
            .last()
            .css("opacity", "0");
        $(`.${slider.attr("class")} img`)
            .last()
            .fadeTo("slow", 1);
    }

    slider.css("transition", "none");
    slider.css("-webkit-transform", "translateX(0)");
    setTimeout(function() {
        slider.css("transition", "all 0.5s");
    });
}