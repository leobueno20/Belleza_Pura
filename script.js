document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
        e.preventDefault();


        const targetId = this.getAttribute('href');


        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
    });
});
document.getElementById("botão-explorar").addEventListener("click", function () {
    const section = document.getElementById("produtos");
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
document.getElementById("verifica-formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const formMessage = document.getElementById("mensagem-formulario");

    formMessage.textContent = "";
    formMessage.className = "";

    if (nameInput === "" || emailInput === "") {
        formMessage.textContent = "Por favor, preencha todos os campos!";
        formMessage.classList.add("erro");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        formMessage.textContent = "Por favor, insira um e-mail válido!";
        formMessage.classList.add("erro");
        return;
    }

    formMessage.textContent = "Inscrição realizada com sucesso!";
    formMessage.classList.add("successo");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
});