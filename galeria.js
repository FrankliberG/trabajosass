window.onload=mouse;
var imagen3 ="<img src='imagen1.jpg'   height='500vw' width='1000vw'/>";
var imagen1;
imagen1="<img src='";
var tamaño="' height='500vw' width='1000vw'/>";
var imagen2;
imagen2="<img src='";
function mouse() {

var uno=document.getElementById("q1");
uno.addEventListener("click",function() {
definir("imagen1.jpg");
});
uno.addEventListener("mouseover",function(){
							pasar("imagen1.jpg");
								});
uno.addEventListener("mouseout",salir);



var dos=document.getElementById("q2");
dos.addEventListener("click",function() {
definir("imagen2.jpg");
});
dos.addEventListener("mouseover",function(){
							pasar("imagen2.jpg");
								});
dos.addEventListener("mouseout",salir);


var tres=document.getElementById("q3");
tres.addEventListener("click",function() {
definir("imagen3.jpg");
});
tres.addEventListener("mouseover",function(){
							pasar("imagen3.jpg");
								});
tres.addEventListener("mouseout",salir);


var cuatro=document.getElementById("q4");
cuatro.addEventListener("click",function() {
definir("imagen4.jpg");
});
cuatro.addEventListener("mouseover",function(){
							pasar("imagen4.jpg");
								});
cuatro.addEventListener("mouseout",salir);


var cinco=document.getElementById("q5");
cinco.addEventListener("click",function() {
definir("imagen5.jpg");
});
cinco.addEventListener("mouseover",function(){
							pasar("imagen5.jpg");
								});
cinco.addEventListener("mouseout",salir);


var seis=document.getElementById("q6");
seis.addEventListener("click",function() {
definir("imagen6.jpg");
});
seis.addEventListener("mouseover",function(){
							pasar("imagen6.jpg");
								});
seis.addEventListener("mouseout",salir);


var siete=document.getElementById("q7");
siete.addEventListener("click",function() {
definir("imagen7.jpg");
});
siete.addEventListener("mouseover",function(){
							pasar("imagen7.jpg");
								});
siete.addEventListener("mouseout",salir);

var ocho=document.getElementById("q8");
ocho.addEventListener("click",function() {
definir("imagen8.jpg");
});
ocho.addEventListener("mouseover",function(){
							pasar("imagen8.jpg");
								});
ocho.addEventListener("mouseout",salir);

var nueve=document.getElementById("q9");
nueve.addEventListener("click",function() {
definir("imagen9.jpg");
});
nueve.addEventListener("mouseover",function(){
							pasar("imagen9.jpg");
								});
nueve.addEventListener("mouseout",salir);

var dies=document.getElementById("q10");
dies.addEventListener("click",function() {
definir("imagen10.jpg");
});
dies.addEventListener("mouseover",function(){
							pasar("imagen10.jpg");
								});
dies.addEventListener("mouseout",salir);

var once=document.getElementById("q11");
once.addEventListener("click",function() {
definir("imagen11.jpg");
});
once.addEventListener("mouseover",function(){
							pasar("imagen11.jpg");
								});
once.addEventListener("mouseout",salir);

var doce=document.getElementById("q12");
doce.addEventListener("click",function() {
definir("imagen12.jpg");
});
doce.addEventListener("mouseover",function(){
							pasar("imagen12.jpg");
								});
doce.addEventListener("mouseout",salir);

var trece=document.getElementById("q13");
trece.addEventListener("click",function() {
definir("imagen13.jpg");
});
trece.addEventListener("mouseover",function(){
							pasar("imagen13.jpg");
								});
trece.addEventListener("mouseout",salir);

var catorce=document.getElementById("q14");
catorce.addEventListener("click",function() {
definir("imagen14.jpg");
});
catorce.addEventListener("mouseover",function(){
							pasar("imagen14.jpg");
								});
catorce.addEventListener("mouseout",salir);

} 

function definir(imagen){

imagen1 +=imagen;

imagen1 +=tamaño;

var m=document.getElementById('pordefecto').innerHTML = imagen1;

imagen3=imagen1;

imagen1="<img src='";

}
function pasar(ima){
imagen2 +=ima;

imagen2 +=tamaño;

	var a =document.getElementById("pordefecto").innerHTML = imagen2;
	imagen2="<img src='";
}
function salir(){
	var m =document.getElementById("pordefecto").innerHTML =imagen3;
}