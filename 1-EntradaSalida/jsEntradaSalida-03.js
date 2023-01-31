/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
Alvarez Leonardo Sebastian Div x */
function mostrar()
{
	var nombreIngresado;							/*Declaro la variable (NombreIngrasado) (var)variables globales 
																							(let)se usan en ambitos, son variables locales)*/
	
	nombreIngresado=txtIdNombre.value; 				//Traspaso el texto del nombre del id como valor al js con (.value)
	
	alert ("tu nombre es: " + txtIdNombre.value);	//el (+) sirve para concatenar

}


