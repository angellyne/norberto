function numero (){
 console.log ("apertei o botão")
 
let pri_numero, seg_numero;
   pri_numero = Number(document.getElementById("pri_numero").value);
   seg_numero = Number(document.getElementById("seg_numero").value);

if (pri_numero != seg_numero) {
    console.log("O número é diferente ");
} else {
    console.log("O número é igual ");
}

    } 


