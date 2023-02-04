/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Alvarez leonaro Sebastian Div X
*/ 
 //PROHIBIDO UASR VARIABLES GLOBALES!!!!!!!

	var  numeroUno;
	var  numeroDos;
	var result;

function sumar()
{	

	

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	
 
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	result = ( numeroUno + numeroDos );

	alert(result);
}

function restar()
{
	

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	
 
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	result = ( numeroUno - numeroDos );

	alert(result);
}

function multiplicar()
{ 

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	
 
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	result = ( numeroUno * numeroDos );

	alert(result);
}

function dividir()
{
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	
 
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	result = ( numeroUno / numeroDos );

	alert(result);
}

