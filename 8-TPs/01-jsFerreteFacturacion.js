/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Alvarez leonardo Sebastian Div X
*/
function Sumar () 
{
    let num1;
    let num2;
    let num3;
    let res;
	
    num1=parseInt( document.getElementById("txtIdPrecioUno").value);
    num2=parseInt( document.getElementById("txtIdPrecioDos").value);
    num3=parseInt( document.getElementById("txtIdPrecioTres").value);
   
    
    res= (num1 + num2 + num3);

    alert(`El resultado de la suma es: ${res.toFixed(2)}`);
}
function Promedio () 
{
	let num1;
    let num2;
    let num3;
    let res;
	
    num1=parseInt( document.getElementById("txtIdPrecioUno").value);
    num2=parseInt( document.getElementById("txtIdPrecioDos").value);
    num3=parseInt( document.getElementById("txtIdPrecioTres").value);
   

    res= (num1 + num2 + num3)/3;

    alert(`El resultado del promedio es: ${res.toFixed(2)}`);

}
function PrecioFinal () 
{
	let num1;
    let num2;
    let num3;
    let res;
    let preConIva;
    let preFinal;
    const IVA=0.21;
	
    num1=parseInt( document.getElementById("txtIdPrecioUno").value);
    num2=parseInt( document.getElementById("txtIdPrecioDos").value);
    num3=parseInt( document.getElementById("txtIdPrecioTres").value);
   
    
    res= (num1 + num2 + num3);

    preConIva = res*IVA;

    preFinal= res+preConIva;

    alert(`El resultado de la suma es: ${res.toFixed(2)}, con el iva se suma: ${preConIva.toFixed(2)} y el Precio final es: ${preFinal.toFixed(2)}`);
}