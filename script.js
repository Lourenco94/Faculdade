function enviarFormulario() {
    console.log("Apertou no botão")

    //Capturar os valores e criar variável para objeto JSON
    let contaCliente =new Object()

    contaCliente.nome = document.getElementById("nome").value;
    contaCliente.sobrenome = document.getElementById("sobrenome").value;
    contaCliente.dataNascimento = document.getElementById("dataNascimento").value;
    contaCliente.rg = document.getElementById("rg").value;
    contaCliente.cpf = document.getElementById("cpf").value;
    contaCliente.nacionalidade = document.getElementById("nacionalidade").value;
    contaCliente.naturalidade = document.getElementById("naturalidade").value;
    contaCliente.seuCurso = document.getElementById("seuCurso").value;
    contaCliente.altura = document.getElementById("altura").value;
    contaCliente.peso = document.getElementById("peso").value;

    //Converter para STRING JSON
    let meuJson = JSON.stringify(contaCliente)

    console.log(meuJson)
    console.log(contaCliente.valueOf())

    document.querySelectorAll("input").forEach(input => input.value = "");
}