/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Alvarez Leonardo Sebastian Div X
*/
function mostrarAumento()
{
	
	let importe;
	let descuento;
	let resultado;
		
	importe = document.getElementById("txtIdImporte").value;
	resultado= document.getElementById("txtIdResultado").value;
		
	importe = parseInt(importe);
	descuento =parseInt(descuento);
		
	descuento = (importe * 25)/100;
	resultado = importe - descuento;
		
	document.getElementById("txtIdResultado").value = resultado;

}
