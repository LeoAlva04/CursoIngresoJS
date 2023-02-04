/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
ALvarez Leonardo Sebastian Div X*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambreTot;
    let perimetro;

    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);

    perimetro= (largo+ancho)*2 ;
    alambreTot= perimetro * 3;

    alert(`el perimetro es ${perimetro} , y los metros total de alambre que necesita es ${alambreTot}`);
  
}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambreTot;
    const PI=3.1416;

    radio=parseInt(document.getElementById("txtIdRadio").value);

    perimetro = (PI*2)*radio;
    alambreTot= perimetro * 3;

    alert(`el perimetro es ${perimetro} , y los metros total de alambre que necesita es ${alambreTot}`);
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let calTot;
    let cementoTot;
    const CAL=3;
    const CEMENTO=2;

    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);

    area= largo * ancho;
    calTot = area* CAL;
    cementoTot = area * CEMENTO;

    alert(`Para el contrapiso se necesitan: ${cementoTot.toFixed(2)} bolsas de cemento y ${calTot.toFixed(2)} bolsas de cal`);

}