const inputCep = document.querySelector('#cep')
const btnCep = document.querySelector('#btnCep')
const resultado = document.querySelector('.resultado')
const limpar = document.querySelector('#limpar')

function handleClick(e) {
    e.preventDefault()
    const cep = inputCep.value
    if(cep === '' || cep.length < 8 || cep.length > 8) {
        alert('digite valores validos')
    }
    btnCep.disabled = true
    buscarCep(cep)
}

function buscarCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(reponse => reponse.json())
    .then(item => {
        const div = document.createElement('div')
        resultado.appendChild(div)
        div.classList.add('res')
        console.log(div)
        div.innerText = `Bairro: ${item.bairro}`
        div.innerHTML += '<br>'
        div.innerText += `DDD: ${item.ddd}`
        div.innerHTML += '<br>'
        div.innerText += `Localidade: ${item.localidade}`
        div.innerHTML += '<br>'
        div.innerText += `uf: ${item.uf}`
        div.innerHTML += '<br>'
        div.innerText += `logradouro: ${item.logradouro}`
    })
}

function limparCep() {
    resultado.style.display = 'none'
    inputCep.value = ''
}

btnCep.addEventListener("click", handleClick)
limpar.addEventListener('click', limparCep)