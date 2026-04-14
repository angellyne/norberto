        function nota(){

        let primeira_nota, segunda_nota, terceira_nota, media, nome, resposta; 


        nome = document.getElementById("nome").value;
        primeira_nota = Number(document.getElementById("primeira_nota").value);
        segunda_nota = Number(document.getElementById("segunda_nota").value);
        terceira_nota = Number(document.getElementById("terceira_nota").value);
        resposta = document.getElementById("resposta").value;
    

        media = (primeira_nota + segunda_nota + terceira_nota) / 3 ;

         

        document.getElementById("media").innerHTML = nome + " sua media é " + media;
        console.log (nome);
        console.log (media);

        if (resposta == "Sim") {
            console.log ("continua");
        } else {
            console.log ("pare");
        }while (media == "sim")

        nome = document.getElementById("nome").value = "" ;
        primeira_nota = Number(document.getElementById("primeira_nota").value = "");
        segunda_nota = Number(document.getElementById("segunda_nota").value  = "") ;
        terceira_nota = Number(document.getElementById("terceira_nota").value = "");
        resposta = document.getElementById("resposta").value = "";
    

        }
