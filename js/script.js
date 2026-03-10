function calcular (){
 console.log ("apertei o botão")

let pri_nota, seg_nota, ter_nota, qua_nota, media;

    pri_nota = Number (document.getElementById("pri_nota").value);
    seg_nota = Number (document.getElementById("seg_nota").value);
    ter_nota = Number (document.getElementById("ter_nota").value);
    qua_nota = Number (document.getElementById("qua_nota").value);


    media = (pri_nota + seg_nota + ter_nota + qua_nota) /4 ;
 


    console.log (pri_nota);
    
    console.log (seg_nota);
    
    console.log (ter_nota);
    
    console.log (qua_nota);

    console.log (media);
    }