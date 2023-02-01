/*
Debemos lograr tomar Los numeros por ID ,\
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Alvarez leonardo Sebastian Div X
*/
function SacarResto()
{
	let  numeroDividendo;
	let  numeroDivisor;
	let  resultado;
	let  res;

	numeroDividendo = document.getElementById("txtIdNumeroDividendo").value;
	numeroDivisor = document.getElementById("txtIdNumeroDivisor").value;	
 
	numeroDividendo = parseInt(numeroDividendo);
	numeroDivisor = parseInt(numeroDivisor);

	resultado = ( numeroDividendo / numeroDivisor );
	res = ( numeroDividendo % numeroDivisor );
	 
	alert(`El resultado es: ${resultado} y El resto es: ${res} `);
}
