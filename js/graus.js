function graus (){
 console.log ("apertei o botão")
 
let celcius, resultado;

   celcius = Number (document.getElementById("celcius").value);

 resultado  = celcius * 1.8 + 32 ;
 document.getElementById("graus").innerHTML = resultado + " fahrenheit ";
 console.log (resultado)
}
