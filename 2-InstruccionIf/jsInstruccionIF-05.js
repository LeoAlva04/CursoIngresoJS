function mostrar()
{
	let edad;

	edad=parseInt( document.getElementById("txtIdEdad").value);

	if (edad>=13 & edad<=17 ){

	}else
	{
		alert(`su edad es: ${edad}, usted no es Adolecente`);
	}


}