


$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000,
        keyboard: false
    });
});

let carouselPaused = false;
$('.playbutton').click(function(){
    if (carouselPaused) {
        $('.carousel').carousel('cycle');
        $(this).text("Pause");
    } else {
        $('.carousel').carousel('pause');
        $(this).text("Play");
    }
    carouselPaused = !carouselPaused;
});

var itemNum=0;
 var button1=document.getElementById('btn-now');
 var display=document.getElementById('itemNum');
 button1.addEventListener('click',function(){
    
     itemNum +=1;
     document.getElementById('itemNum').innerHTML=itemNum;
 });

document.querySelector("#myCard").classList.toggle("flip");
