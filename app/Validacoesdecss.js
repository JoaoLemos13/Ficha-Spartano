// Validação se a variável que armazena os exercicois estiver vazio o campo dos exercicios fica oculto

let buttonSemana = document.querySelectorAll("button")

document.addEventListener("DOMContentLoaded", function() {
    let buttonSemana = document.querySelectorAll("button")

  
    buttonSemana.forEach((button) => {
        button.addEventListener("click", () => {
    
            let buttonClicado = button.id
            let fichaDeTreinoClicada  = document.getElementById(`Ficha de ${buttonClicado}`)
            
            let fichaDeTreinoClicadaSalvo  = document.getElementById(`FichadeTreinoSalva ${buttonClicado}`)
  
            let areaTotal = document.getElementById("areaTotal")
            let areaTotalSalvo = document.getElementById("areaTotalTreinoSalvo")
            let FichaDeTreino = document.getElementById("FichadeTreino")




                      // Ocultar todas as fichas de treino

                      Array.from(areaTotalSalvo.children).forEach((ficha) => {
                        ficha.style.display = "none";
                    });
        
                      Array.from(areaTotal.children).forEach((ficha) => {
                        ficha.style.display = "none";
                    });
                  
                    // Exibir apenas a ficha salva, se existir
                    if (fichaDeTreinoClicadaSalvo !== null) {
                        fichaDeTreinoClicadaSalvo.style.display = "block";
                        FichaDeTreino.style.display = "block"
                    } else {
                        fichaDeTreinoClicada.style.display = "block";
                    }


        })

    })})