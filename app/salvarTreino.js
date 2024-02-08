const itens = JSON.parse(localStorage.getItem('Treino Segunda')) || [];
const treinoSalvoSegunda = document.getElementById("TreinoSalvo");
const botaoDeletarTreino = ""
const areadoTotaldoEspaco = document.getElementById("areaTotalTreinoSalvo")


//Chamada para ação de trocar treino
if (botaoDeletarTreino !== ""){
 let botaoDeletarTreino = document.getElementById("deletarTreino")
 console.log("teste")
botaoDeletarTreino.addEventListener("click", () => {trocarTreino()})
}




// Salva o Musculo a ser treinado quando o select Muda 
//selectTreinodia.addEventListener("change", () => {
  // salvarMusculodoDia()
//})
// função que salva o Musculo que será treinado no dia
function salvarMusculodoDia (diadaSemana, opcao) {
  

let TreinoDoDia = JSON.parse(localStorage.getItem(`Treino de ${diadaSemana}`)) || [];
TreinoDoDia.push(opcao)
localStorage.setItem(`Treino do dia ${diadaSemana}`, JSON.stringify(TreinoDoDia) )

}


// Salvar os Exercios do dia
function salvarTreino (ex, valueLabel) {
  
  let exercicioDoDia = JSON.parse(localStorage.getItem(`Ex ${valueLabel}`)) || [];
  exercicioDoDia.push(ex)
  console.log(exercicioDoDia)
  localStorage.setItem(`Ex ${valueLabel}`, JSON.stringify(exercicioDoDia) )

 
  }
  // Salva a Label de cada novo input que será criado
  function salvarLabel (label, valueLabel){
    let labeldosEx = JSON.parse(localStorage.getItem(`Label ${valueLabel}`)) || [];
    labeldosEx.push(label)
    localStorage.setItem(`Label ${valueLabel}`, JSON.stringify(labeldosEx))
  }
     

  let labelSegunda = JSON.parse(localStorage.getItem('Label Segunda-Feira'))
  let labelterca = JSON.parse(localStorage.getItem('Label Terça-Feira'))
  let labelquarta = JSON.parse(localStorage.getItem('Label Quarta-Feira'))
  let labelQuinta = JSON.parse(localStorage.getItem('Label Quinta-Feira'))
  let labelSexta = JSON.parse(localStorage.getItem('Label Sexta-Feira'))
  let labelSabado = JSON.parse(localStorage.getItem('Label Sabado'))
  let labelDomingo = JSON.parse(localStorage.getItem('Label Domingo'))

let treinoSegundaSalvo = JSON.parse(localStorage.getItem('Ex Segunda-Feira'))
let treinoTercaSalvo = JSON.parse(localStorage.getItem('Ex Terça-Feira'))
let treinoQuartaSalvo = JSON.parse(localStorage.getItem('Ex Quarta-Feira'))
let treinoQuintaSalvo = JSON.parse(localStorage.getItem('Ex Quinta-Feira'))
let treinoSextaSalvo = JSON.parse(localStorage.getItem('Ex Sexta-Feira'))
let treinoSabadoSalvo = JSON.parse(localStorage.getItem('Ex Sabado'))
let treinoDomingoSalvo = JSON.parse(localStorage.getItem('Ex Domingo'))

// Carregar e criar os inputs e Label salvo no local storage quando tem om reload
// Carrega a Ficha de Segunda Feira
// gera o input do treino quando tiver um reload
window.addEventListener("load", () => {
  if(localStorage.getItem("Treino do dia Segunda-Feira")){
    let novaLabel = document.createElement("label");
    let novoInput = document.createElement("input");
    let novaFicha = document.createElement("div")
    let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Segunda-Feira")) 

    novaLabel.class = "labelTreinoDia";
    novaLabel.textContent = "Treino de Segunda-Feira"
    novoInput.type = "text"
    novoInput.value = ValueInputdoTreino
    novoInput.className = "inputNomeSalvo"
    novaFicha.id = "FichadeTreinoSalva Segunda-Feira"
    novaFicha.className = "fichaDeTreinoSalva"

    areadoTotaldoEspaco.appendChild(novaFicha)
    novaFicha.appendChild(novaLabel);
    novaFicha.appendChild(novoInput);
  }
})
// Carregar e criar os inputs e Label salvo no local storage quando tem om reload
window.addEventListener("load", () => {
  if (localStorage.getItem("Treino do dia Segunda-Feira")){
    let novaFicha = document.getElementById("FichadeTreinoSalva Segunda-Feira")
    let novoButton = document.createElement("button")
   

    for(let i = 0; i<treinoSegundaSalvo.length; i++){
    
      let novaLabel = document.createElement("label")
      let espacoCheckBoxEInput = document.createElement("div")
      let espacoCheckBox = document.createElement("span")
      let NovoInput = document.createElement("input")
   
      
      novaLabel.class = "labelExerecicios"
      NovoInput.type = "text"
      NovoInput.className = "InputEx"
      espacoCheckBox.type = "checkbox"
      espacoCheckBox.className = "i-akar-icons-circle-fill"
      espacoCheckBox.id = "CheckBoxTreinoCompleto"
      novaLabel.textContent = `${i+1}° Exercicio`
      NovoInput.value = treinoSegundaSalvo[i];
      NovoInput.id = i
      novoButton.textContent = "Trocar Treino"
      espacoCheckBoxEInput.className = "espacoCheckBox"

     
      novaFicha.appendChild(novaLabel);
      espacoCheckBoxEInput.appendChild(espacoCheckBox)
      espacoCheckBoxEInput.appendChild(NovoInput)
    novaFicha.appendChild(espacoCheckBoxEInput);
    novaFicha.appendChild(novoButton)
    areadoTotaldoEspaco.appendChild(novaFicha)


    novoButton.addEventListener("click", () => {
      function trocarTreino () {
  
        localStorage.removeItem("Ex Segunda-Feira");
        localStorage.removeItem("Label Segunda-Feira");
        localStorage.removeItem("Treino do dia Segunda-Feira");
        window.location.reload();
      }
      trocarTreino()
      
      
    })


    espacoCheckBox.addEventListener("click", () => {
      espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
      espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
    });
      
      






    }
  }})







  // Carrega a Ficha de Terça-Feira

  window.addEventListener("load", () => {
    if(localStorage.getItem("Treino do dia Terça-Feira")){
      let novaLabel = document.createElement("label");
      let novoInput = document.createElement("input");
      let novaFicha = document.createElement("div")
      let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Terça-Feira")) 
  
      novaLabel.class = "labelTreinoDia";
      novaLabel.textContent = "Treino de Terça-Feira"
      novoInput.type = "text"
      novoInput.value = ValueInputdoTreino
      novoInput.className = "inputNomeSalvo"
      novaFicha.id = "FichadeTreinoSalva Terça-Feira"
      novaFicha.className = "fichaDeTreinoSalva"

      areadoTotaldoEspaco.appendChild(novaFicha)
      novaFicha.appendChild(novaLabel);
      novaFicha.appendChild(novoInput);
    }
  })
  // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
  window.addEventListener("load", () => {
    if (localStorage.getItem("Treino do dia Terça-Feira")){
      let novaFicha = document.getElementById("FichadeTreinoSalva Terça-Feira")
      let novoButton = document.createElement("button")
      novaFicha.className ="fichaDeTreinoSalva"

      for(let i = 0; i<treinoTercaSalvo.length; i++){
      
        let novaLabel = document.createElement("label")
        let espacoCheckBoxEInput = document.createElement("div")
        let espacoCheckBox = document.createElement("span")
        let NovoInput = document.createElement("input")
     
        
        novaLabel.class = "labelExerecicios"
        NovoInput.type = "text"
        NovoInput.className = "InputEx"
        espacoCheckBox.type = "checkbox"
        espacoCheckBox.className = "i-akar-icons-circle-fill"
        espacoCheckBox.id = "CheckBoxTreinoCompleto"
        novaLabel.textContent = `${i+1}° Exercicio`
        NovoInput.value = treinoTercaSalvo[i];
        NovoInput.id = i
        novoButton.textContent = "Trocar Treino"
        espacoCheckBoxEInput.className = "espacoCheckBox"
  
       
        novaFicha.appendChild(novaLabel);
        espacoCheckBoxEInput.appendChild(espacoCheckBox)
        espacoCheckBoxEInput.appendChild(NovoInput)
      novaFicha.appendChild(espacoCheckBoxEInput);
      novaFicha.appendChild(novoButton)
      areadoTotaldoEspaco.appendChild(novaFicha)
  

      novoButton.addEventListener("click", () => {
        function trocarTreino () {
    
          localStorage.removeItem("Ex Terça-Feira");
          localStorage.removeItem("Label Terça-Feira");
          localStorage.removeItem("Treino do dia Terça-Feira");
          window.location.reload();
        }
        trocarTreino()
        
        
      })
  

      espacoCheckBox.addEventListener("click", () => {
        espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
        espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
      });
        
        






      }
    }})





  
// Carrega a Ficha de Quarta-Feira

window.addEventListener("load", () => {
  if(localStorage.getItem("Treino do dia Quarta-Feira")){
    let novaLabel = document.createElement("label");
    let novoInput = document.createElement("input");
    let novaFicha = document.createElement("div")
    let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Quarta-Feira")) 

    novaLabel.class = "labelTreinoDia";
    novaLabel.textContent = "Treino de Quarta-Feira"
    novoInput.type = "text"
    novoInput.value = ValueInputdoTreino
    novoInput.className = "inputNomeSalvo"
    novaFicha.id = "FichadeTreinoSalva Quarta-Feira"
    novaFicha.className = "fichaDeTreinoSalva"

    areadoTotaldoEspaco.appendChild(novaFicha)
    novaFicha.appendChild(novaLabel);
    novaFicha.appendChild(novoInput);
  }
})
// Carregar e criar os inputs e Label salvo no local storage quando tem om reload
window.addEventListener("load", () => {
  if (localStorage.getItem("Treino do dia Quarta-Feira")){
    let novaFicha = document.getElementById("FichadeTreinoSalva Quarta-Feira")
    let novoButton = document.createElement("button")
novaFicha.className ="fichaDeTreinoSalva"

    for(let i = 0; i<treinoQuartaSalvo.length; i++){
    
      let novaLabel = document.createElement("label")
      let espacoCheckBoxEInput = document.createElement("div")
        let espacoCheckBox = document.createElement("span")
        let NovoInput = document.createElement("input")
        
        
        novaLabel.class = "labelExerecicios"
        NovoInput.type = "text"
        NovoInput.className = "InputEx"
        espacoCheckBox.type = "checkbox"
        espacoCheckBox.className = "i-akar-icons-circle-fill"
        espacoCheckBox.id = "CheckBoxTreinoCompleto"
        novaLabel.textContent = `${i+1}° Exercicio`
        NovoInput.value = treinoQuartaSalvo[i];
        NovoInput.id = i
        novoButton.textContent = "Trocar Treino"
        espacoCheckBoxEInput.className = "espacoCheckBox"
  
        novaFicha.appendChild(novaLabel);
        espacoCheckBoxEInput.appendChild(espacoCheckBox)
        espacoCheckBoxEInput.appendChild(NovoInput)
      novaFicha.appendChild(espacoCheckBoxEInput);
      novaFicha.appendChild(novoButton)
      areadoTotaldoEspaco.appendChild(novaFicha)
  
      espacoCheckBox.addEventListener("click", () => {
        espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
        espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
      });



    novoButton.addEventListener("click", () => {
      function trocarTreino () {


        espacoCheckBox.addEventListener("click", () => {
          espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
          espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
        });
  
        localStorage.removeItem("Ex Quarta-Feira");
        localStorage.removeItem("Label Quarta-Feira");
        localStorage.removeItem("Treino do dia Quarta-Feira");
        window.location.reload();
      }
      trocarTreino()
      
      
    })

    }
  }})





  // Carrega a Ficha de Quinta-Feira

  window.addEventListener("load", () => {
    if(localStorage.getItem("Treino do dia Quinta-Feira")){
      let novaLabel = document.createElement("label");
      let novoInput = document.createElement("input");
      let novaFicha = document.createElement("div")
      let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Quinta-Feira")) 
  
      novaLabel.class = "labelTreinoDia";
      novaLabel.textContent = "Treino de Quinta-Feira"
      novoInput.type = "text"
      novoInput.className = "inputNomeSalvo"
      novoInput.value = ValueInputdoTreino
      novaFicha.id = "FichadeTreinoSalva Quinta-Feira"
      novaFicha.className = "fichaDeTreinoSalva"

      areadoTotaldoEspaco.appendChild(novaFicha)
      novaFicha.appendChild(novaLabel);
      novaFicha.appendChild(novoInput);
    }
  })
  // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
  window.addEventListener("load", () => {
    if (localStorage.getItem("Treino do dia Quinta-Feira")){
      let novaFicha = document.getElementById("FichadeTreinoSalva Quinta-Feira")
      let novoButton = document.createElement("button")
      for(let i = 0; i<treinoQuintaSalvo.length; i++){
      
        let novaLabel = document.createElement("label")
        let espacoCheckBoxEInput = document.createElement("div")
        let espacoCheckBox = document.createElement("span")
        let NovoInput = document.createElement("input")
        
        
        novaLabel.class = "labelExerecicios"
        NovoInput.type = "text"
        NovoInput.className = "InputEx"
        espacoCheckBox.type = "checkbox"
        espacoCheckBox.className = "i-akar-icons-circle-fill"
        espacoCheckBox.id = "CheckBoxTreinoCompleto"
        novaLabel.textContent = `${i+1}° Exercicio`
        NovoInput.value = treinoQuintaSalvo[i];
        NovoInput.id = i
        novoButton.textContent = "Trocar Treino"
        espacoCheckBoxEInput.className = "espacoCheckBox"
  
        novaFicha.appendChild(novaLabel);
        espacoCheckBoxEInput.appendChild(espacoCheckBox)
        espacoCheckBoxEInput.appendChild(NovoInput)
      novaFicha.appendChild(espacoCheckBoxEInput);
      novaFicha.appendChild(novoButton)
      areadoTotaldoEspaco.appendChild(novaFicha)


      espacoCheckBox.addEventListener("click", () => {
        espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
        espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
      });

      novoButton.addEventListener("click", () => {
        function trocarTreino () {
    
          localStorage.removeItem("Ex Quinta-Feira");
          localStorage.removeItem("Label Quinta-Feira");
          localStorage.removeItem("Treino do dia Quinta-Feira");
          window.location.reload();
        }
        trocarTreino()
        
        
      })
  
      }
    }})




    // Carrega a Fiha de Sexta-Feira

    window.addEventListener("load", () => {
      if(localStorage.getItem("Treino do dia Sexta-Feira")){
        let novaLabel = document.createElement("label");
        let novoInput = document.createElement("input");
        let novaFicha = document.createElement("div")
        let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Sexta-Feira")) 
    
        novaLabel.class = "labelTreinoDia";
        novaLabel.textContent = "Treino de Sexta-feira"
        novoInput.type = "text"
        novoInput.className = "inputNomeSalvo"
        novoInput.value = ValueInputdoTreino
        novaFicha.id = "FichadeTreinoSalva Sexta-Feira"
        novaFicha.className = "fichaDeTreinoSalva"
  
        areadoTotaldoEspaco.appendChild(novaFicha)
        novaFicha.appendChild(novaLabel);
        novaFicha.appendChild(novoInput);
      }
    })
    // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
    window.addEventListener("load", () => {
      if (localStorage.getItem("Treino do dia Sexta-Feira")){
        let novaFicha = document.getElementById("FichadeTreinoSalva Sexta-Feira")
        let novoButton = document.createElement("button")
  
        for(let i = 0; i<treinoSextaSalvo.length; i++){
        
          let novaLabel = document.createElement("label")
          let espacoCheckBoxEInput = document.createElement("div")
          let espacoCheckBox = document.createElement("span")
          let NovoInput = document.createElement("input")
          
          
          novaLabel.class = "labelExerecicios"
          NovoInput.type = "text"
          NovoInput.className = "InputEx"
          espacoCheckBox.type = "checkbox"
          espacoCheckBox.className = "i-akar-icons-circle-fill"
          espacoCheckBox.id = "CheckBoxTreinoCompleto"
          novaLabel.textContent = `${i+1}° Exercicio`
          NovoInput.value = treinoSextaSalvo[i];
          NovoInput.id = i
          novoButton.textContent = "Trocar Treino"
          espacoCheckBoxEInput.className = "espacoCheckBox"
    
          novaFicha.appendChild(novaLabel);
          espacoCheckBoxEInput.appendChild(espacoCheckBox)
          espacoCheckBoxEInput.appendChild(NovoInput)
        novaFicha.appendChild(espacoCheckBoxEInput);
        novaFicha.appendChild(novoButton)
        areadoTotaldoEspaco.appendChild(novaFicha)


        espacoCheckBox.addEventListener("click", () => {
          espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
          espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
        });


        novoButton.addEventListener("click", () => {
          function trocarTreino () {
      
            localStorage.removeItem("Ex Sexta-Feira");
            localStorage.removeItem("Label Sexta-Feira");
            localStorage.removeItem("Treino do dia Sexta-Feira");
            window.location.reload();
          }
          trocarTreino()
          
          
        })
    
    
        }
      }})





      // Carrega Ficha de Sábado

      window.addEventListener("load", () => {
        if(localStorage.getItem("Treino do dia Sabado")){
          let novaLabel = document.createElement("label");
          let novoInput = document.createElement("input");
          let novaFicha = document.createElement("div")
          let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Sabado")) 
      
          novaLabel.class = "labelTreinoDia";
          novaLabel.textContent = "Treino de Sabádo"
          novoInput.type = "text"
          novoInput.className = "inputNomeSalvo"
          novoInput.value = ValueInputdoTreino
          novaFicha.id = "FichadeTreinoSalva Sabado"
          novaFicha.className = "fichaDeTreinoSalva"
    
          areadoTotaldoEspaco.appendChild(novaFicha)
          novaFicha.appendChild(novaLabel);
          novaFicha.appendChild(novoInput);
        }
      })
      // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
      window.addEventListener("load", () => {
        if (localStorage.getItem("Treino do dia Sabado")){
          let novoButton = document.createElement("button")
          let novaFicha = document.getElementById("FichadeTreinoSalva Sabado")
    
          for(let i = 0; i<treinoSabadoSalvo.length; i++){
          
            let novaLabel = document.createElement("label")
            let espacoCheckBoxEInput = document.createElement("div")
        let espacoCheckBox = document.createElement("span")
        let NovoInput = document.createElement("input")
        
        
        novaLabel.class = "labelExerecicios"
        NovoInput.type = "text"
        NovoInput.className = "InputEx"
        espacoCheckBox.type = "checkbox"
        espacoCheckBox.className = "i-akar-icons-circle-fill"
        espacoCheckBox.id = "CheckBoxTreinoCompleto"
        novaLabel.textContent = `${i+1}° Exercicio`
        NovoInput.value = treinoSabadoSalvo[i];
        NovoInput.id = i
        novoButton.textContent = "Trocar Treino"
        espacoCheckBoxEInput.className = "espacoCheckBox"
  
        novaFicha.appendChild(novaLabel);
        espacoCheckBoxEInput.appendChild(espacoCheckBox)
        espacoCheckBoxEInput.appendChild(NovoInput)
      novaFicha.appendChild(espacoCheckBoxEInput);
      novaFicha.appendChild(novoButton)
      areadoTotaldoEspaco.appendChild(novaFicha)


      espacoCheckBox.addEventListener("click", () => {
        espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
        espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
      });


          novoButton.addEventListener("click", () => {
            function trocarTreino () {
        
              localStorage.removeItem("Ex Sabado");
              localStorage.removeItem("Label Sabado");
              localStorage.removeItem("Treino do dia Sabado");
              window.location.reload();
            }
            trocarTreino()
            
            
          })

      
          }
        }})





        // Carrega a ficha de Domingo


window.addEventListener("load", () => {
    if(localStorage.getItem("Treino do dia Domingo")){
      let novaLabel = document.createElement("label");
      let novoInput = document.createElement("input");
      let novaFicha = document.createElement("div")
     
      let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Domingo")) 
  
      novaLabel.class = "labelTreinoDia";
      novaLabel.textContent = "Treino de Domingo"
      novoInput.type = "text"
      novoInput.className = "inputNomeSalvo"
      novoInput.value = ValueInputdoTreino
      novaFicha.id = "FichadeTreinoSalva Domingo"
      novaFicha.className = "fichaDeTreinoSalva"
      

      areadoTotaldoEspaco.appendChild(novaFicha)
      novaFicha.appendChild(novaLabel);
      novaFicha.appendChild(novoInput);
      
    }
  })
  // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
  window.addEventListener("load", () => {
    if (localStorage.getItem("Treino do dia Domingo")){
      let novaFicha = document.getElementById("FichadeTreinoSalva Domingo")
      let novoButton = document.createElement("button")
      for(let i = 0; i<treinoDomingoSalvo.length; i++){
      
        let novaLabel = document.createElement("label")
        let espacoCheckBoxEInput = document.createElement("div")
        let espacoCheckBox = document.createElement("span")
        let NovoInput = document.createElement("input")
        
        
        novaLabel.class = "labelExerecicios"
        NovoInput.type = "text"
        NovoInput.className = "InputEx"
        espacoCheckBox.type = "checkbox"
        espacoCheckBox.className = "i-akar-icons-circle-fill"
        espacoCheckBox.id = "CheckBoxTreinoCompleto"
        novaLabel.textContent = `${i+1}° Exercicio`
        NovoInput.value = treinoDomingoSalvo[i];
        NovoInput.id = i
        novoButton.textContent = "Trocar Treino"
        espacoCheckBoxEInput.className = "espacoCheckBox"
  
        novaFicha.appendChild(novaLabel);
        espacoCheckBoxEInput.appendChild(espacoCheckBox)
        espacoCheckBoxEInput.appendChild(NovoInput)
      novaFicha.appendChild(espacoCheckBoxEInput);
      novaFicha.appendChild(novoButton)
      areadoTotaldoEspaco.appendChild(novaFicha)


      espacoCheckBox.addEventListener("click", () => {
        espacoCheckBox.classList.toggle("i-akar-icons-circle-check-fill");
        espacoCheckBox.classList.toggle("i-akar-icons-circle-fill");
      });

      
      novoButton.addEventListener("click", () => {
        function trocarTreino () {
    
          localStorage.removeItem("Ex Domingo");
          localStorage.removeItem("Label Domingo");
          localStorage.removeItem("Treino do dia Domingo");
          window.location.reload();
        }
        trocarTreino()
        
      })
  
      }
    }})


  
/*
for (const input in treinoSegundaSalvo) {
  let contador = 0
  if(input) {
  teste.innerHTML = `<input type="text" value="${treinoSegundaSalvo[contador]}">`
}
}
*/


