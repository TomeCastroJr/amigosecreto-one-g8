//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomeAmigo = document.getElementById("amigo");
const listaDeAmigoshtml = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let listaDeAmigos = [];

function adicionarAmigo(){
    const nome = nomeAmigo.value.trim();
    if(nome === ""){
        alert("Adicione Amigos a sua lista");
        return;
    }
    listaDeAmigos.push(nome);
    nomeAmigo.value = "";
    atualizarListaDeAmigosHtml();
    nomeAmigo.focus();
}

