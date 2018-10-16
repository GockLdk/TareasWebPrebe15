while(true)
{
var pregunta = prompt("Que quieres saber?");
var suerte = Math.random(); /*Toma valores entre 0 y 1*/

if (suerte < 0.34)
{
	alert("Nel, estas bien wey si crees eso :v");
}else if (suerte <= 0.67)
	{
		alert("Posiblemente no te vaya mal con eso...")
	}else 
	{
		alert("Simon dijo Nelson ;v");
	}
console.log(pregunta,suerte);
}
