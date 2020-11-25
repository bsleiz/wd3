
let rSlider=document.getElementById('redSlider')
let gSlider=document.getElementById('greenSlider')
let bSlider=document.getElementById('blueSlider')

let stopped=false;
let grow=false;
let shrink=false;

let colorChange=function(){
   console.log("Red:"+ rSlider.value + "Green" +gSlider.value + "blue" +bSlider.value);
 cColor ="rgb("+rSLider.value +", "+gSlider.value +", "+ bSlider.value +")";
draw();
ca

let cColor="rgb(255,200,0)";
function drawCircle(){
    context.fillColor=cColor
    if (grow ){
        cRad+=.6;
    }
    if (shrink){
        cRad-=.6
    }
    if (cRad*2>=canvas.height){
        shrink=true;
        grow=false;

    }
    if (cRad <=60){
        shrink=false;
    }
}


}

rSlider.addEventListener("change, colorChange");
gSlider.addEventListener("change, colorChange");
bSlider.addEventListener("change, colorChange");

stopped=!stopped;
grow=!grow;