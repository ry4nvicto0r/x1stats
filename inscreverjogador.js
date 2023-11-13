let pgPainelFinanceiro = document.querySelector('.btnPainelFinanceiro')
pgPainelFinanceiro.addEventListener('click' , function(){
    window.location.href = "home.html";
})


let btnInscreverJogador = document.querySelector('.btnCadastrarJogador')
btnInscreverJogador.addEventListener('click' ,  function(){
    
    let inputNomeJogador = document.querySelector('#inputNome') 
    let nomeDoJogador = inputNomeJogador.value 

    let inputIdadeJogador = document.querySelector('#inputIdade')
    let idadeDoJogador = inputIdadeJogador.value 
    
    let inputPeso = document.querySelector('#inputPeso')
    let pesoDoJogador = inputPeso.value

    let inputAltura = document.querySelector('#inputAltura')
    let alturaDoJogador = inputAltura.value

    let inputAdmissao = document.querySelector('#inputAdmissao')
    let dataAdmissao = inputAdmissao.value

    let qntJogos = document.querySelector('#inputQntJogos')
    let qntDeJogos = qntJogos.value

    let inputSalario = document.querySelector("#inputSalario")
    let salarioDoJogador = inputSalario.value 

    let divJogadores = document.querySelector('.bodyTabelaJogadores')
    
    let trNovoJogador = document.createElement('tr') 

    let tdNomeJogador = document.createElement('td')
    tdNomeJogador.innerHTML ='<td>'+ nomeDoJogador +'</td>'

    let tdIdadeJogador = document.createElement('td')
    tdIdadeJogador.innerHTML ='<td>'+ idadeDoJogador +'</td>'

    let tdPesoJogador = document.createElement('td')
    tdPesoJogador.innerHTML = '<td>'+ pesoDoJogador +'</td>'

    let tdAlturaJogador = document.createElement('td')
    tdAlturaJogador.innerHTML = '<td>'+ alturaDoJogador +'</td>'

    let tdDataAdmissaoJogador = document.createElement('td')
    tdDataAdmissaoJogador.innerHTML = '<td>'+ dataAdmissao +'</td>'

    let tdQntJogos = document.createElement('td')
    tdQntJogos.innerHTML = '<td>'+ qntDeJogos +'</td>'

    let tdSalario = document.createElement('td')
    tdSalario.innerHTML = '<td>'+ salarioDoJogador +'</td>'


    

    trNovoJogador.append(tdNomeJogador , tdIdadeJogador , tdPesoJogador ,tdAlturaJogador , tdDataAdmissaoJogador , tdQntJogos , tdSalario)
    divJogadores.appendChild(trNovoJogador)

    inputNomeJogador.value = ' '
    inputIdadeJogador.value = ' '
    inputPeso.value = ' '
    inputAltura.value = ' '
    inputAdmissao.value = ' '
    qntJogos.value = ' '
    inputSalario.value = ' '

    


    
    
})