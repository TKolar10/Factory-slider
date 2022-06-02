$(document).ready(function() {
    var img = $("img");

    const topRow = [
        "slider-image-1.jpg",
        "slider-image-2.jpg",
        "slider-image-3.jpg",
        "slider-image-4.jpg",
        "slider-image-5.jpg",
    ];
    const bottomRow = [
        "slider-image-6.jpg",
        "slider-image-7.jpg",
        "slider-image-8.jpg",
        "slider-image-9.jpg",
    ];

    let topRowCounter = topRow.length - 1;
    let bottomRowCounter = bottomRow.length - 1;
    let firstClick = true;

    $("#top-0").attr("src", `./Assets/${topRow[0]}`);
    $("#top-1").attr("src", `./Assets/${topRow[1]}`);
    $("#top-2").attr("src", `./Assets/${topRow[2]}`);
    $("#top-3").attr("src", `./Assets/${topRow[3]}`);
    $("#top-4").attr("src", `./Assets/${topRow[4]}`);
    $("#bottom-0").attr("src", `./Assets/${bottomRow[0]}`);
    $("#bottom-1").attr("src", `./Assets/${bottomRow[1]}`);
    $("#bottom-2").attr("src", `./Assets/${bottomRow[2]}`);
    $("#bottom-3").attr("src", `./Assets/${bottomRow[3]}`);

    $(".slider__btn--left").click(() => {
        let displayLastImgTop = false;
        let displayLastImgBottom = false;

        if (topRowCounter === topRow.length - 1) {
            topRowCounter = 0;
            displayLastImgTop = true;
        }
        if (bottomRowCounter === bottomRow.length - 1) {
            bottomRowCounter = 0;
            displayLastImgBottom = true;
        }
        if (firstClick) {
            topRowCounter += 1;
            bottomRowCounter += 1;
        }
        firstClick = false;

        if (!displayLastImgTop) topRowCounter += 1;
        let topCounter = topRowCounter;

        if (!displayLastImgBottom) bottomRowCounter += 1;
        let bottomCounter = bottomRowCounter;

        img.animate({ opacity: "0" }, "fast");
        for (let i = 0; i < topRow.length; i++) {
            $(`#top-${i}`).attr("src", `./Assets/${topRow[topCounter]}`);
            topCounter += 1;
            if (topCounter === topRow.length) topCounter = 0;
        }
        for (let i = 0; i < bottomRow.length; i++) {
            $(`#bottom-${i}`).attr("src", `./Assets/${bottomRow[bottomCounter]}`);
            bottomCounter += 1;
            if (bottomCounter === bottomRow.length) bottomCounter = 0;
        }

        img.animate({ opacity: "1" }, "slow");
    });
    $(".slider__btn--right").click(() => {
        let displayLastImgTop = false;
        let displayLastImgBottom = false;

        if (topRowCounter === 0) {
            topRowCounter = topRow.length - 1;
            displayLastImgTop = true;
        }
        if (bottomRowCounter === 0) {
            bottomRowCounter = bottomRow.length - 1;
            displayLastImgBottom = true;
        }
        if (!displayLastImgTop) topRowCounter -= 1;
        let topCounter = topRowCounter;

        img.animate({ opacity: "0" }, "fast");
        for (let i = topRow.length - 1; i >= 0; i--) {
            $(`#top-${i}`).attr("src", `./Assets/${topRow[topCounter]}`);
            topCounter -= 1;
            if (topCounter === -1) topCounter = topRow.length - 1;
        }

        if (!displayLastImgBottom) bottomRowCounter -= 1;
        let bottomCounter = bottomRowCounter;

        for (let i = bottomRow.length - 1; i >= 0; i--) {
            $(`#bottom-${i}`).attr("src", `./Assets/${bottomRow[bottomCounter]}`);
            bottomCounter -= 1;
            if (bottomCounter === -1) bottomCounter = bottomRow.length - 1;
        }

        img.animate({ opacity: "1" }, "slow");
    });
});