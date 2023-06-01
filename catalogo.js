const cards = document.querySelector(".cards");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");

var emaillogado;
femailLogado();

carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null) {
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `
        <div class="cardimagem"><img src="img/${elemento.foto}"></div>
        <div class="cardnome">${elemento.nome}
        <p>${elemento.descricao}</p>
        <div class="editar"><i class="bi bi-pencil-fill" onclick="editar(${indice})"></i></div>
        <div class="excluir"><i class="bi bi-trash3-fill" onclick="excluir(${indice})"></i></div>
        </div>
        </div>`;
        
        cards.appendChild(divcard);}
        
    });
}

function editar(indice){
    var url ="cadastrodoitem.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function femailLogado(){
    let dados = sessionStorage.getItem("logado");
    if (dados == null){
        window.location.assign("login.html");
    } else{
        emaillogado = dados;
    }
}