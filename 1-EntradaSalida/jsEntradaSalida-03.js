/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
Alvarez Leonardo Sebastian Div x 
*/
function mostrar()
{
	let nombreIngresado;							/*Declaro la variable (NombreIngrasado) (var)variables globales 
																							(let)se usan en ambitos, son variables locales)*/
	
	//nombreIngresado=txtIdNombre.value; 			(solo funciona en el chrome, no es estandar) //Traspaso el texto del nombre del id como valor al js con (.value)
													
	nombreIngresado = document.getElementById("txtIdNombre").value;			
	
	alert(nombreIngresado);
}

/*
CamelCase:(joroba de camello) cada palabra indica donde comienza la otara ya que no se usan espacios y es mas facil de leer
getElementByDi: sirve para llamar una id o un elemeto de un html
el (+) : sirve para concatenar en texto y con numeros hace una ecuasion aricmetica
*/