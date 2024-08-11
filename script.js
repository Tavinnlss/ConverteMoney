//Obtendo os elementos do formulario.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
})//CAPTURAR O VALOR DO INPUT CONFORME A PESSOA INSERE CONTEUDO DENTRO DELE

// /\d/ -> encontrar caracteres, adiciona o sinal de +, que se encontrar pega todos de uma vez e no final adciona a fleg g de global para pegar em toda string.
//Quando o replace encontrar esse padrão que foi passado ele ira substituir, nesse caso vai substituir por nada. 


//Capturando o elemento de submit(enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    console.log(currency.value);
}
//Podemos usar funções anonimas ( function()) ou arrowFunction -> () =>{}
// event.preventDefa dasativa o comportamento padão, reaload