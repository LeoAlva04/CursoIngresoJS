/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años"
Alvarez Leonardo Sebastian Div X
*/
function mostrar()
{	
	//declare la variable nombre 
	let nombre;

	//declare la variable edad
	let edad;

	//guardo lo escrito en la variable nombre
	nombre = document.getElementById("txtIdNombre").value;	

	//guardo lo escrito en la variable Edad
	edad = document.getElementById("txtIdEdad").value;
	
	//lo coloco en alert para mostrarlo y uso la tecla (+) para concatenar
	
	alert("Su nombre es: " + nombre + " y tiene " +  edad + " años");
	
	
	/*_alert(`su nombre es: ${nombre} y tiene  ${edad} años `): _*/
	
	/*Esta es otra forma para no usar el (+), se usa (`...`) para marcar todo el texto y para marcar la variable
	se utiliza (${...})*/
}

