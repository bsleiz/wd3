var itemNum=0;
var button=document.getElementById('btn-now');
var display=document.getElementById('itemNum');
button.addEventListener('click',function(){
 
    itemNum +=1;
    document.getElementById('itemNum').innerHTML=itemNum;

});
