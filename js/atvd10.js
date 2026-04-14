let prompt;
try {
    prompt = require("prompt-sync")({ sigint: true });
} catch (e) {
}

// Contadores
let menores18 = 0;
let maiores65 = 0;

while (true) {
    let entrada = prompt("Digite a idade (ou número menor que 1 para sair): ");

    // Validação de entrada
    if (entrada === null) {
        console.log("Entrada cancelada.");
        break;
    }

    let idade = Number(entrada);

    if (isNaN(idade)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }

    // Condição de parada
    if (idade < 1) {
        break;
    }

    // Contagem
    if (idade < 18) {
        menores18++;
    } else if (idade > 65) {
        maiores65++;
    }
}
console.log("\n=== RESULTADO FINAL ===");
console.log(`Total de pessoas com menos de 18 anos: ${menores18}`);
console.log(`Total de pessoas com mais de 65 anos: ${maiores65}`);
