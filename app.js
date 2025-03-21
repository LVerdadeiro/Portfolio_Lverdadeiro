let modo_claro = localStorage.getItem("modo_claro");
const trocaTema = document.getElementById("trocar_tema");

const habilitaModoClaro = () => {
    document.body.classList.add("modo_claro");
    localStorage.setItem("modo_claro", "ativo");
};

const desabilitarModoClaro = () => {
    document.body.classList.remove("modo_claro");
    localStorage.removeItem("modo_claro");
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
