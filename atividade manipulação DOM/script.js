function titulo(){
var titulo = window.document.getElementById('titulo')
var resp_ti = prompt('insira o titulo: ')
titulo.innerText = resp_ti
}

function subtitulo(){
    var sub = window.document.getElementById('subtitulo')
    var resp_subt = prompt('insira um subtitulo: ')
     sub.innerText = resp_subt
}

function desc(){
    var desc = window.document.getElementById('descricao')
    var resp_desc = prompt('insira uma descrição: ')
     desc.innerText = resp_desc
    }
    titulo(), subtitulo(), descricao() 