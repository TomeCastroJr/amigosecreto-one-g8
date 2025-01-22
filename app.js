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

function atualizarListaDeAmigosHtml(){
    listaDeAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.innerText = amigo;
        listaDeAmigoshtml.appendChild(li);
    })
 
}

function sortearAmigo(){
    if (listaDeAmigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos primeiro.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    resultado.innerHTML = `<p>O amigo sorteado foi: ${amigoSorteado}</p>`;
    listaDeAmigos.splice(0);
    atualizarListaDeAmigosHtml();
}

