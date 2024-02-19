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
     

  let labelSegunda = JSON.parse(localStorage.getItem('Label Segunda'))
  let labelterca = JSON.parse(localStorage.getItem('Label Terça'))
  let labelquarta = JSON.parse(localStorage.getItem('Label Quarta'))
  let labelQuinta = JSON.parse(localStorage.getItem('Label Quinta'))
  let labelSexta = JSON.parse(localStorage.getItem('Label Sexta'))
  let labelSabado = JSON.parse(localStorage.getItem('Label Sabado'))
  let labelDomingo = JSON.parse(localStorage.getItem('Label Domingo'))

let treinoSegundaSalvo = JSON.parse(localStorage.getItem('Ex Segunda'))
let treinoTercaSalvo = JSON.parse(localStorage.getItem('Ex Terça'))
let treinoQuartaSalvo = JSON.parse(localStorage.getItem('Ex Quarta'))
let treinoQuintaSalvo = JSON.parse(localStorage.getItem('Ex Quinta'))
let treinoSextaSalvo = JSON.parse(localStorage.getItem('Ex Sexta'))
let treinoSabadoSalvo = JSON.parse(localStorage.getItem('Ex Sabado'))
let treinoDomingoSalvo = JSON.parse(localStorage.getItem('Ex Domingo'))

// Carregar e criar os inputs e Label salvo no local storage quando tem om reload
// Carrega a Ficha de Segunda Feira
// gera o input do treino quando tiver um reload
window.addEventListener("load", () => {
  if(localStorage.getItem("Treino do dia Segunda")){
    let novaLabel = document.createElement("label");
    let novoInput = document.createElement("input");
    let novaFicha = document.createElement("div")
    let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Segunda")) 

    novaLabel.class = "labelTreinoDia";
    novaLabel.textContent = "Treino de Segunda"
    novoInput.type = "text"
    novoInput.value = ValueInputdoTreino
    novoInput.className = "inputNomeSalvo"
    novaFicha.id = "FichadeTreinoSalva Segunda"
    novaFicha.className = "fichaDeTreinoSalva"

    areadoTotaldoEspaco.appendChild(novaFicha)
    novaFicha.appendChild(novaLabel);
    novaFicha.appendChild(novoInput);
  }
})
// Carregar e criar os inputs e Label salvo no local storage quando tem om reload
window.addEventListener("load", () => {
  if (localStorage.getItem("Treino do dia Segunda")){
    let novaFicha = document.getElementById("FichadeTreinoSalva Segunda")
    let novoButton = document.createElement("button")
   

    for(let i = 0; i<treinoSegundaSalvo.length; i++){
    
      let novaLabel = document.createElement("label")
      let espacoCheckBoxEInput = document.createElement("div")
      let espacoCheckBox = document.createElement("span")
      let NovoInput = document.createElement("input")
   
      
      novaLabel.class = "labelExerecicios"
      NovoInput.type = "text"
      NovoInput.className = "InputEx"
      NovoInput.setAttribute("readonly", "")
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
  
        localStorage.removeItem("Ex Segunda");
        localStorage.removeItem("Label Segunda");
        localStorage.removeItem("Treino do dia Segunda");
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







  // Carrega a Ficha de Terça

  window.addEventListener("load", () => {
    if(localStorage.getItem("Treino do dia Terça")){
      let novaLabel = document.createElement("label");
      let novoInput = document.createElement("input");
      let novaFicha = document.createElement("div")
      let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Terça")) 
  
      novaLabel.class = "labelTreinoDia";
      novaLabel.textContent = "Treino de Terça"
      novoInput.type = "text"
      novoInput.value = ValueInputdoTreino
      novoInput.className = "inputNomeSalvo"
      novaFicha.id = "FichadeTreinoSalva Terça"
      novaFicha.className = "fichaDeTreinoSalva"

      areadoTotaldoEspaco.appendChild(novaFicha)
      novaFicha.appendChild(novaLabel);
      novaFicha.appendChild(novoInput);
    }
  })
  // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
  window.addEventListener("load", () => {
    if (localStorage.getItem("Treino do dia Terça")){
      let novaFicha = document.getElementById("FichadeTreinoSalva Terça")
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
        NovoInput.setAttribute("readonly", "")
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
    
          localStorage.removeItem("Ex Terça");
          localStorage.removeItem("Label Terça");
          localStorage.removeItem("Treino do dia Terça");
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





  
// Carrega a Ficha de Quarta

window.addEventListener("load", () => {
  if(localStorage.getItem("Treino do dia Quarta")){
    let novaLabel = document.createElement("label");
    let novoInput = document.createElement("input");
    let novaFicha = document.createElement("div")
    let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Quarta")) 

    novaLabel.class = "labelTreinoDia";
    novaLabel.textContent = "Treino de Quarta"
    novoInput.type = "text"
    novoInput.value = ValueInputdoTreino
    novoInput.className = "inputNomeSalvo"
    novaFicha.id = "FichadeTreinoSalva Quarta"
    novaFicha.className = "fichaDeTreinoSalva"

    areadoTotaldoEspaco.appendChild(novaFicha)
    novaFicha.appendChild(novaLabel);
    novaFicha.appendChild(novoInput);
  }
})
// Carregar e criar os inputs e Label salvo no local storage quando tem om reload
window.addEventListener("load", () => {
  if (localStorage.getItem("Treino do dia Quarta")){
    let novaFicha = document.getElementById("FichadeTreinoSalva Quarta")
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
        NovoInput.setAttribute("readonly", "")
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
  
        localStorage.removeItem("Ex Quarta");
        localStorage.removeItem("Label Quarta");
        localStorage.removeItem("Treino do dia Quarta");
        window.location.reload();
      }
      trocarTreino()
      
      
    })

    }
  }})





  // Carrega a Ficha de Quinta

  window.addEventListener("load", () => {
    if(localStorage.getItem("Treino do dia Quinta")){
      let novaLabel = document.createElement("label");
      let novoInput = document.createElement("input");
      let novaFicha = document.createElement("div")
      let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Quinta")) 
  
      novaLabel.class = "labelTreinoDia";
      novaLabel.textContent = "Treino de Quinta"
      novoInput.type = "text"
      novoInput.className = "inputNomeSalvo"
      novoInput.value = ValueInputdoTreino
      novaFicha.id = "FichadeTreinoSalva Quinta"
      novaFicha.className = "fichaDeTreinoSalva"

      areadoTotaldoEspaco.appendChild(novaFicha)
      novaFicha.appendChild(novaLabel);
      novaFicha.appendChild(novoInput);
    }
  })
  // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
  window.addEventListener("load", () => {
    if (localStorage.getItem("Treino do dia Quinta")){
      let novaFicha = document.getElementById("FichadeTreinoSalva Quinta")
      let novoButton = document.createElement("button")
      for(let i = 0; i<treinoQuintaSalvo.length; i++){
      
        let novaLabel = document.createElement("label")
        let espacoCheckBoxEInput = document.createElement("div")
        let espacoCheckBox = document.createElement("span")
        let NovoInput = document.createElement("input")
        
        
        novaLabel.class = "labelExerecicios"
        NovoInput.type = "text"
        NovoInput.className = "InputEx"
        NovoInput.setAttribute("readonly", "")
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
    
          localStorage.removeItem("Ex Quinta");
          localStorage.removeItem("Label Quinta");
          localStorage.removeItem("Treino do dia Quinta");
          window.location.reload();
        }
        trocarTreino()
        
        
      })
  
      }
    }})




    // Carrega a Fiha de Sexta

    window.addEventListener("load", () => {
      if(localStorage.getItem("Treino do dia Sexta")){
        let novaLabel = document.createElement("label");
        let novoInput = document.createElement("input");
        let novaFicha = document.createElement("div")
        let ValueInputdoTreino = JSON.parse(localStorage.getItem("Treino do dia Sexta")) 
    
        novaLabel.class = "labelTreinoDia";
        novaLabel.textContent = "Treino de Sexta"
        novoInput.type = "text"
        novoInput.className = "inputNomeSalvo"
        novoInput.value = ValueInputdoTreino
        novaFicha.id = "FichadeTreinoSalva Sexta"
        novaFicha.className = "fichaDeTreinoSalva"
  
        areadoTotaldoEspaco.appendChild(novaFicha)
        novaFicha.appendChild(novaLabel);
        novaFicha.appendChild(novoInput);
      }
    })
    // Carregar e criar os inputs e Label salvo no local storage quando tem om reload
    window.addEventListener("load", () => {
      if (localStorage.getItem("Treino do dia Sexta")){
        let novaFicha = document.getElementById("FichadeTreinoSalva Sexta")
        let novoButton = document.createElement("button")
  
        for(let i = 0; i<treinoSextaSalvo.length; i++){
        
          let novaLabel = document.createElement("label")
          let espacoCheckBoxEInput = document.createElement("div")
          let espacoCheckBox = document.createElement("span")
          let NovoInput = document.createElement("input")
          
          
          novaLabel.class = "labelExerecicios"
          NovoInput.type = "text"
          NovoInput.className = "InputEx"
          NovoInput.setAttribute("readonly", "")
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
      
            localStorage.removeItem("Ex Sexta");
            localStorage.removeItem("Label Sexta");
            localStorage.removeItem("Treino do dia Sexta");
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
        NovoInput.setAttribute("readonly", "")
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
        NovoInput.setAttribute("readonly", "")
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


