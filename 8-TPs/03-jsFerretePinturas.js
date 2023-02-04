/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
ALvarez Leonardo Sebastian Div X*/
function FahrenheitCentigrados () 
{
	let centi;
    let fahr;

    fahr=parseInt(document.getElementById("txtIdTemperatura").value);
    
    centi=(fahr-32)/1.8;

    alert(`La temperatura en Fharenheit es ${fahr.toFixed(2)} y en Centigrados es ${centi.toFixed(2)}`);

}

function CentigradosFahrenheit () 
{
	let centi;
    let fahr;

    centi=parseInt(document.getElementById("txtIdTemperatura").value);
    
    fahr=(centi*1.8)/32;

    alert(`La temperatura en Centigrados es ${centi.toFixed(2)} y en Fharenheit es ${fahr.toFixed(2)}`);
}
