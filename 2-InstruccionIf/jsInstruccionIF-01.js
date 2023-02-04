function mostrar()
{
	//tomo la edad  
	let edad;

	edad=parseInt( document.getElementById("txtIdEdad").value);

	if (edad==15){

	alert(`su edad es: ${edad}, niña bonita`);

	}else if (edad!=15){

	alert(`su edad es: ${edad}`);

	}

	/* 	Igual: (==) se usa para comparar variables
		Diferencia: (!=) se usa para marcar una diferencia entre dos variables */
}