/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Alvarez Leonardo Sebastian Div X
*/
function sumar()
{
	//declaro las variables 
	let  numeroUno;
	let  numeroDos;
	let result;

	//carge el texto que ingresa el ususario a la variable
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	
 
	//Asi se paso el texto que ingreso el usuario a numero entero
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	/*	
		//forma corta de hacer el parseo
		numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
		numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	*/	

	//aca realiza la suma y se carga en la variable result (resultado)
	result = numeroUno + numeroDos ;

	//el resultado lo muestro con alert
	alert(result);
}



//parseing: se utiliza para convertir algo de tipo cadena "escrito "(escrito a valor nuemrico (number) y visceversa
//parseInt: convierte dato cadena a numero entero 
//parseFloat: convierte dato cadena en flotante a numero, acepta numero decimal 
//casting: convertir un tipo de dato numerico a otro numerico 