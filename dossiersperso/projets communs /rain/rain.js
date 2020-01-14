























var perso2interval;
var div = document.querySelector('#life2');//perso
var left = 0;
var updateleft = function (){

    left=left+10;
    if (left>700) {
        left=700;
    } 
    div.style.left= left+"px";

} 
setInterval(updateleft,60);//perso


const life2 = document.getElementsByClassName('haha') [0] ;//vie
var vieIterval;

var vieInterval = setInterval(()=> {
   
    
const computedStyle = getComputedStyle(life2);
const width = parseFloat(computedStyle.getPropertyValue('--width')) ;
life2.style.setProperty('--width',width - .1)
console.log(width);
if ( width<=0) { 
clearInterval(vieInterval);
left=100;
perso2interval = setInterval(updatelefte,60);
document.getElementById("life2").style.display="none";

      }
},5);//vie



//perso momie 

var perso3interval;
var dive = document.querySelector('#life3');
var updatelefte = function (){
left=left+10;
if (left>1000) {
clearInterval(perso2interval);
left=1000;
    } 
dive.style.left= left+"px";
} //perso2 momie




var life3 = document.getElementsByClassName('zaza') [0] ;// vie momie
var vieIntervale;
var vieIntervale = setInterval(()=> {


const computedStyle = getComputedStyle(life3);
const width = parseFloat(computedStyle.getPropertyValue('--width')) ;
life3.style.setProperty('--width',width - .1)
if (width<=0){
clearInterval(vieIntervale);
left=100;
perso3interval = setInterval(updatelefta,60);
document.getElementById("life3").style.display="none";

}

},5);

var diva = document.querySelector('#life');
var updatelefta = function (){
left=left+10;
if (left>1000) {
clearInterval(perso2interval);
left=1000;
    } 
diva.style.left= left+"px";
} 





















/*const life3 = document.getElementsByClassName('zaza') [0] ;
var vieItervale;
  var vieIntervale = setInterval(()=> {

    const computedStyle = getComputedStyle(life3);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) ;
    life3.style.setProperty('--width',width - .1)


/*var dive = document.querySelector('#life3');
var left = 0
var updatelefte = function (){

    left=left+10
    if (left>500) {
        left=500
    } 
    dive.style.left= left+"px"
} 
setInterval(updatelefte,60)
*/




// villageois2//
/*var dive = document.querySelector('#life2');
var left = 0
var updatelefte = function (){

    left=left+10
    if (left>800) {
        left=800
    } 
    dive.style.left= left+"px"
  
} 
setInterval(updatelefte,60)


const life2 = document.getElementsByClassName('haha') [0]
setInterval(()=> {
    const computedStyle = getComputedStyle(life2)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) 
    life2.style.setProperty('--width',width - .1)

      if ( width<=0) {
 setTimeout(function(){document.getElementById("life2").style.display="none"})
          console.log("il faut disparaitre");
       
      }
},20)










/*const life = document.getElementsByClassName('haha') [0]
setInterval(()=> {
    const computedStyle = getComputedStyle(life2)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) 
    life2.style.setProperty('--width',width - .1)
},20)

function button(){ 

var elem = document.getElementById("sisi") ;
var pos = 0;
var id = setInterval (frame,-30);
function frame(){
   


  
    if(pos==350){
        elem==elem+1;
        clearInterval(id);
    } else{
        pos++;
        elem.style.top = pos + 'px';
       
    }

}






}
document.body.appendChild("sisi");




    
    
    
    
    
clique.onclick =click;




/*var lifeIndicator = document.querySelector('#life div');
var pourcent=0;
addEventListener('timeupdate',function(){
console.log(this.duration);
console.log(this.currentTime);
});*/