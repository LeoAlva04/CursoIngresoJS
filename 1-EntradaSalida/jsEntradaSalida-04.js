/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'´
Alvarez Leonardo Sebastian Div X
*/

function mostrar()
{
	// Decalro la variable 
	let nombreIngresado;
	
	//Asigno lo escrito en el teclado a la variable 
	nombreIngresado = prompt("Nombre De Usuario");

	//Lo de la variable lo asigno a la caja de texto del html
	document.getElementById("txtIdNombre").value = nombreIngresado;

}

