function validarCPF() {
    const cpf = document.getElementById("cpfInput").value.replace(/\D/g, '');
    if (cpf.length !== 11) {
        exibirResultado("CPF inválido. Insira somente 11 dígitos.");
        return;
    }

    // Verificação dos dígitos
    let soma = 0;
    for (i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    const resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        if (parseInt(cpf.charAt(9)) !== 0) {
            exibirResultado("CPF inválido.");
            return;
        }
    } else if (parseInt(cpf.charAt(9)) !== resto) {
        exibirResultado("CPF inválido.");
        return;
    }

    soma = 0;
    for (i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    const segundoResto = (soma * 10) % 11;

    if (segundoResto === 10 || segundoResto === 11) {
        if (parseInt(cpf.charAt(10)) !== 0) {
            exibirResultado("CPF inválido.");
            return;
        }
    } else if (parseInt(cpf.charAt(10)) !== segundoResto) {
        exibirResultado("CPF inválido.");
        return;
    }

    exibirResultado(`O CPF ${cpf} é válido.`);
}

function exibirResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
}

document.getElementById("validarBtn").addEventListener("click", validarCPF);
