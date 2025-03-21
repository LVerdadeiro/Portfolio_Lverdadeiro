const paginaAtiva = window.location.pathname;

const nav_links = document.querySelectorAll("nav a").forEach(link => {
    if(link.href.includes(`${paginaAtiva}`)){
        link.classList.add("ativo");
    }
})

document.addEventListener("DOMContentLoaded", () => {
    let modo_claro = localStorage.getItem("modo_claro");
    const trocaTema = document.getElementById("trocar_tema");
    
    const habilitaModoClaro = () => {
        document.body.classList.add("modo_claro");
        localStorage.setItem("modo_claro", "ativo");
    };
    
    const desabilitarModoClaro = () => {
        document.body.classList.remove("modo_claro");
        localStorage.removeItem("modo_claro", "inativo");
    };
    
    if (modo_claro === "ativo") {
        habilitaModoClaro();
    }
    
    trocaTema.addEventListener("click", () => {
        if (localStorage.getItem("modo_claro") === "ativo") {
            desabilitarModoClaro();
        } else {
            habilitaModoClaro();
        }
    });
})
