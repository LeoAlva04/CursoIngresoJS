function mostrar()
{
	let edad;

	edad=parseInt( document.getElementById("txtIdEdad").value);

	if (edad>=18){

		alert(`su edad es: ${edad}, usted es mayor de edad`);

	}else if (edad<18){

		alert(`su edad es: ${edad}, usted es menor de edad`);
	}
}//FIN DE LA FUNCIÓN