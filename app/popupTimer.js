/*
document.addEventListener("DOMContentLoaded", function() {
    // Tempo em segundos após o qual o popup será exibido (15 segundos neste exemplo)
    let tempoDeDescanso = JSON.parse(localStorage.getItem("tempoDeDescanso"))

    if (tempoDeDescanso === null || tempoDeDescanso === undefined) {
    const tempoExibicaoPopup = 10 * 1000; // Convertendo para milissegundos


    

    // Exibir o popup após o tempo especificado
    setTimeout(() => {
        exibirPopup();
    }, tempoExibicaoPopup);

    // Função para exibir o popup
    function exibirPopup() {
        document.getElementById("popup").style.display = "block";
    }

    // Função para fechar o popup
    document.getElementById("fecharPopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });

    // Função para obter o tempo inserido pelo usuário
    document.getElementById("tempoInput").addEventListener("change", function() {
        const tempoDigitado = parseInt(this.value);
        console.log("Tempo digitado:", tempoDigitado);

        // Aqui você pode fazer o que desejar com o tempo digitado pelo usuário
        // Por exemplo, armazená-lo em uma variável global ou local para uso posterior

        localStorage.setItem("tempoDeDescanso", tempoDigitado)
       
    });
}});
*/
