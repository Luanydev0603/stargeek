const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evt)=>{

    if (email.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu email";
        return null;
        email.focus();
    } 

    if (senha.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite sua senha";
        return null;
        senha.focus();
    }

    let dados = JSON.parse(localStorage.getItem("bd"));
    dados.forEach((elemento) => {
        if(elemento.emailcliente == email.value && elemento.senhacliente == senha.value){
            msg.innerHTML = "Aguarde redirecionando..."
            evt.preventDefault();
            setTimeout(()=>{
                 window.location.assign("catalogo.html");
            },2000);
            return true;
        } else{
            msg.innerHTML = "Usuário ou senha incorretos!";
            evt.preventDefault();
            return null;
        }
    })
}