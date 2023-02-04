function mostrar()
{
	let num
	
	num = Math.round(Math.random(1)*10);

	alert("Número aleatorio entre 1 y 10:"+num);


	if (num>8){

		alert(`Exelente`)

	}else if (num>4 & num<9){

		alert(`aprobó`)

	}else if (num<4){

		alert(`aprobó`)

	}
}//FIN DE LA FUNCIÓN