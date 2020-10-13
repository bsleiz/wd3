$('#myModal').modal('show');

$('#joinNow').click(function () {
    $('#myModal').modal('hide');
    alert('Thank you for joining us.');
})

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000,
        keyboard: false
    });
})

let carouselPaused = false;
$('.btn-primary').click(function () {
    if (carouselPaused) {
        $('.carousel').carousel('cycle');
        $(this).text("Pause");
    } else {
        $('.carousel').carousel('pause');
        $(this).text("Play");
    }
    carouselPaused = !carouselPaused;
});