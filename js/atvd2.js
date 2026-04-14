 function iniciarVerificacao() {
            let piso = parseInt(prompt("Digite o número inteiro de piso: "));
            let proximo;
    
            if (isNaN(piso)) return;

            do {
                proximo = parseInt(prompt("Digite um novo número (proximo): "));
                
                if (isNaN(proximo)) break; 

                if (proximo >= piso) {
                    console.log(`O número ${proximo} é maior ou igual ao piso ${piso}. Continuando...`);
                } else {
                    console.log(`O número ${proximo} é menor que ${piso}. Finalizando.`);
                }
            } while (proximo >= piso); }