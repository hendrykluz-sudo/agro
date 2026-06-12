// Mostrar mensagem ao clicar no botão
document.getElementById("mostrarMensagem").addEventListener("click", function() {
    const msg = document.getElementById("mensagem");
    msg.classList.toggle("hidden");
});

// Formulário de contato
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio real

    const nome = document.getElementById("nome").value;
    const resposta = document.getElementById("respostaForm");
    
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    resposta.style.color = "green";

    this.reset();
});
