// Função para validar o formulário
const form = document.getElementById("formDoacao");
const erro = document.getElementById("erro");

let doadores = JSON.parse(localStorage.getItem("doadores")) || [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    erro.textContent = "";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const tipoSanguineo = document.getElementById("tipoSanguineo").value;
    const telefone = document.getElementById("telefone").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    if (!nome.includes(" ")) {
        erro.textContent = "Digite nome e sobrenome.";
        return;
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        erro.textContent = "Email inválido.";
        return;
    }

    if (idade < 16) {
        erro.textContent = "Idade mínima é 16 anos.";
        return;
    }

    if (peso < 50) {
        erro.textContent = "Peso mínimo é 50kg.";
        return;
    }

    if (tipoSanguineo === "") {
        erro.textContent = "Selecione o tipo sanguíneo.";
        return;
    }
    const regexTelefone = /^[0-9]+$/;
    if (!regexTelefone.test(telefone)) {
        erro.textContent = "Telefone deve conter apenas números.";
        return;
    }
    if (!nome || !email || !idade || !peso || !telefone || !cidade || !estado) {
        erro.textContent = "Preencha todos os campos.";
        return;
    }
    const doador = {
        nome,
        email,
        idade,
        peso,
        tipoSanguineo,
        telefone,
        cidade,
        estado
    };
    doadores.push(doador);
    localStorage.setItem("doadores", JSON.stringify(doadores));

    console.log("Lista de doadores atualizada:", doadores);
    alert("Cadastro realizado com sucesso!");

    form.reset();
});