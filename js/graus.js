function graus (){
 console.log ("apertei o botão")
 
let celcius, resultado;

    const fator_multiplicador = 1.8;

   celcius = Number (document.getElementById("celcius").value);

 resultado  = celcius * fator_multiplicador + 32 ;
 document.getElementById("graus").innerHTML = resultado + " fahrenheit ";
 console.log (resultado)
}
