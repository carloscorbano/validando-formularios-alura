import ehUmPF from "./valida-cpf.js";

const camposDoformulario = document.querySelectorAll("[required]");

camposDoformulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));    
})

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmPF(campo);
    }
}