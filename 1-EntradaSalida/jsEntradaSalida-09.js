/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Alvarez Leonardo Sebastian Div X
*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;
	
	sueldo= document.getElementById("txtIdSueldo").value;
	resultado= document.getElementById("txtIdResultado").value;
	
	sueldo = parseInt(sueldo);
	aumento =parseInt(aumento);
	
	aumento = (sueldo * 10)/100;
	resultado = sueldo + aumento;
	
	document.getElementById("txtIdResultado").value = resultado;
}
