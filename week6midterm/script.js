$('#myModal').modal('show');


 let form= document.getElementById('myForm');
 form.addEventListener("submit", function(evt){
     if(form.checkValidity()===false){
 evt.preventDefault();
 evt.stopPropagation();
     }
    
    else {(form.parentNode=== myModal) 
        evt.preventDefault();
        evt.stopPropagation();

        $('#myModal').modal('hide');
        alert('Thank you for your submission.');
    }
form.classList.add('was-validated');
 });



 

    

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000,
        keyboard: false
    });
});

let carouselPaused = false;
$('.primary').click(function () {
    if (carouselPaused) {
        $('.carousel').carousel('cycle');
        $(this).text("Pause");
    } else {
        $('.carousel').carousel('pause');
        $(this).text("Play");
    }
    carouselPaused = !carouselPaused;
});