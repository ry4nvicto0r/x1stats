let btnCadastrarAposta = document.querySelector('.btnCadastrarAposta')
btnCadastrarAposta.addEventListener('click' , function(){
    let tabValorApostado = document.querySelector('.valorApostado')
    let valorApostado = tabValorApostado.value 
    valorApostado = prompt("Valor?")
    tabValorApostado.innerHTML = valorApostado 
    console.log(valorApostado)

})
let pgInscreverJogador = document.querySelector('.btnInscreverJogador')
pgInscreverJogador.addEventListener('click' , function(){
    window.location.href = "inscreverJogador.html";
})