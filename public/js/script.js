$(document).ready(function () {
    $(".exp-perso").mouseover(function () {
    $('#exp').text("Réalisations");
    });
});

$(document).ready(function () {
    $(".exp-pro").mouseover(function () {
    $('#exp').text("Expériences pro");
    });
});

$(document).ready(function () {
    $(".exp-pro").mouseover(function () {
    $('#exp').text("Expériences pro");
    });
});

anime({
    targets: '#logo',
    translateY: 7,
    direction: 'alternate',
    loop: true,
    easing: 'steps(8)',
    duration: 1500
});