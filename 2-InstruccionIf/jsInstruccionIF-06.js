function mostrar()
{
	let edad;

	edad=parseInt( document.getElementById("txtIdEdad").value);

	if (edad>=13 & edad<=17 ){

		alert(`su edad es: ${edad}, usted es Adolecente`);

	}
	else if (edad>=18)
	{
	
		alert(`su edad es: ${edad}, usted es Mayor`);
	}
	else if (edad<=13)
	{
	
		alert(`su edad es: ${edad}, usted es menor`);

	}
}
