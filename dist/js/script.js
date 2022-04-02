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

$(document).ready(function () {
    $("#square-box").mouseover(function () {
    $('#exp').animate({ opacity: 100 });
    });
});

// $(document).ready(function () {
//     $(".btn-box").mouseover(function () {
//     $('#exp').animate({ opacity: 100 });
//     });
// });

// $(function() {
//     $('.btn-box').hover(function() { 
//         $('#exp').animate({ opacity: 100 }); 
//     }, function() { 
//         $('#exp').animate({ opacity: 0 }); 
//     });
//     });