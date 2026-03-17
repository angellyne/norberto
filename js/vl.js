function vm (){
 console.log ("apertei o botão")
 
let distancia, tempo, resultado;
   distancia = Number (document.getElementById("distancia").value);
   tempo = Number (document.getElementById("tempo").value);

 resultado  = distancia / tempo ;
 document.getElementById("vm").innerHTML = resultado + "Km/h";
 console.log (vm)
}


