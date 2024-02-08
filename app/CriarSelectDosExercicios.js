const botoes = document.querySelectorAll("button")
contado = 0

const treinoPeito = ["escolha seu treino", "Supino Reto", "Supino Inclinado", "Supino Declinado","Supino Reto com Halter",
"fly Inclinado","Supino Declinado com Halter","Crusifixo","Supino Maquina"];

const peitoBiceps = ["escolha seu treino",
"Supino Reto","Supino Inclinado","Supino Declinado", "Supino Reto com Halter","fly Inclinado",
"Supino Declinado com Halter","Crusifixo","Supino Maquina","Rosca Direta","Rosca Concentrada",
"Rosca Alternada","Rosca Scott",
];
const peitoTrícps = ["escolha seu treino","Supino Reto","Supino Inclinado","Supino Declinado","Supino Reto com Halter",
"fly Inclinado","Supino Declinado com Halter","Crusifixo","Supino Maquina","tríceps pulley",
"tríceps Corda","tríceps Testa","tríceps no Banco"];

const costasBiceps = [
    "escolha seu treino","Remada Curvada","Remada Pulldow","Remada Cavalinho","Remada Alta",
    "Remada com Corda","Remada Unilateral","Remada Baixa","Remada Bolt","Rosca Direta","Rosca Concentrada",
    "Rosca Alternada","Rosca Scott",
];

const costasTríceps = ["escolha seu treino","Remada Curvada","Remada Pulldow","Remada Cavalinho","Remada Alta",
"Remada com Corda","Remada Unilateral","Remada Baixa",
"Remada Bolt","tríceps pulley","tríceps Corda","tríceps Testa","tríceps no Banco",
];

const pernaCompleta = ["escolha seu treino",
"Cadeira Extensora","Cadeira Flexora","Mesa Flexora","Agachamento Livre","Agachamento com barra Guiada",
"Agachamento com halter","Cadeira Abdutora","Cadeira Adutora","Leg Press Maquina",
"Leg Press 90°", "Leg Press 45°","Panturilha no Gêmeos","Panturilha em pé"];

const apenasCostas = [ "escolha seu treino","Remada Curvada","Remada Pulldow",
"Remada Cavalinho","Remada Alta","Remada com Corda","Remada Unilateral",
"Remada Baixa","Remada Bolt","Levantamento Terra"];

const braçoCompleto = ["escolha seu treino","Rosca Direta","Rosca Concentrada","Rosca Alternada",
"Rosca Scott","tríceps pulley","tríceps Corda","tríceps Testa","tríceps no Banco"];

const Quadricepsgluteo = ["escolha seu treino","Agachamento Livre","Afundo","Bulgáro","Passada","Elevação Pelvíca"];

const Quadriceps = ["escolha seu treino","Agachamento Livre","Leg Press","Extensora","Agachamento com Halter",
"Agachamento Hack"]

const ombroPeito = ["escolha seu treino",
"Supino Reto","Supino Inclinado","Supino Declinado","Supino Reto com Halter","fly Inclinado",
"Supino Declinado com Halter","Crusifixo","Desenvolvimento Maquina","Desenvolvimento Militar",
"Desenvolvimento com Halter","Elevação Lateral","Elevação Frontal","Encolhimento",
]

const OmbroAbdomen = ["escolha seu treino",
"Abdominal Reto", "Abdominal Invertido","Abdominal Bicicleta", "Desenvolvimento Maquina",
"Desenvolvimento Militar","Desenvolvimento com Halter","Elevação Lateral","Elevação Frontal","Encolimento" ]


const salvarTreinoSegunda = [];
const salvarExSegunda = []; 


const localDoTreinoDoDia = ""

 function criarSelectEx (Treino, areaDaFicha){

    console.log(areaDaFicha)
    
    const localDoTreinoDoDia = document.getElementById(areaDaFicha);
    let ButtonSalvar = document.createElement("button")
    let espacoDoButton = document.createElement("div")



    //Caracteristicas do button

    ButtonSalvar.textContent = "Salvar"
    ButtonSalvar.className = "buttonSalvar"

    // caracteristicas espacoButton
    espacoDoButton.classList = "espacoButtonSalvar"
    // cria um novo elemento de Select
   let newSelect = document.createElement("select")
   // acrecesta uma class para o Select
newSelect.classList ="exercicios"
newSelect.id = `Exercicio ${Treino.value}`
localDoTreinoDoDia.appendChild (newSelect)




// Peito + Bíceps
if (Treino.value == "Peito + Bíceps"){
    let optionsHTML = "";
    for( let i = 0;  i < peitoBiceps.length; i++){
        optionsHTML += `<option value="${peitoBiceps[i]}">${peitoBiceps[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    

}
 // Peito Apenas
if (Treino.value == "Peito Apenas"){
    let optionsHTML = "";
    for( let i = 0;  i < treinoPeito.length; i++){
        optionsHTML += `<option value="${treinoPeito[i]}">${treinoPeito[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
   
   
}

// Peito + Triceps
if (Treino.value == "Peito + Tríceps"){
    let optionsHTML = "";
    for( let i = 0;  i < peitoTrícps.length; i++){
        optionsHTML += `<option value="${peitoTrícps[i]}">${peitoTrícps[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   console.log(Treino.value)
   
  
}
// Costar e Bíceps
if (Treino.value == "Costas e Bíceps"){
    let optionsHTML = "";
    for( let i = 0;  i < costasBiceps.length; i++){
        optionsHTML += `<option value="${costasBiceps[i]}">${costasBiceps[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   console.log(Treino.value)
   
  
}
// Costas e Tríceps

if (Treino.value == "Costas e Tríceps"){
    let optionsHTML = "";
    for( let i = 0;  i < costasTríceps.length; i++){
        optionsHTML += `<option value="${costasTríceps[i]}">${costasTríceps[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
   
       
}

// Perna Completo 
if (Treino.value == "Perna Completo"){
    let optionsHTML = "";
    for( let i = 0;  i < pernaCompleta.length; i++){
        optionsHTML += `<option value="${pernaCompleta[i]}">${pernaCompleta[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
  
}
// Apenas Costas
if (Treino.value == "Apenas Costas"){
    let optionsHTML = "";
    for( let i = 0;  i < apenasCostas.length; i++){
        optionsHTML += `<option value="${apenasCostas[i]}">${apenasCostas[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
  
}
// Braço Completo
if (Treino.value == "Braço Completo"){
    let optionsHTML = "";
    for( let i = 0;  i < braçoCompleto.length; i++){
        optionsHTML += `<option value="${braçoCompleto[i]}">${braçoCompleto[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
  
}
// Quadricéps e Gluteo
if (Treino.value == "Quadricéps e Gluteo"){
    let optionsHTML = "";
    for( let i = 0;  i < Quadricepsgluteo.length; i++){
        optionsHTML += `<option value="${Quadricepsgluteo[i]}">${Quadricepsgluteo[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
  
}
// Apenas Quadrícps
if (Treino.value == "Apenas Quadrícps"){
    let optionsHTML = "";
    for( let i = 0;  i < Quadriceps.length; i++){
        optionsHTML += `<option value="${Quadriceps[i]}">${Quadriceps[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
  
}
// Ombro e Peito
if (Treino.value == "Ombro e Peito"){
    let optionsHTML = "";
    for( let i = 0;  i < ombroPeito.length; i++){
        optionsHTML += `<option value="${ombroPeito[i]}">${ombroPeito[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
   
  
} 
//Ombro e Abdômen
if (Treino.value == "Ombro e Abdômen"){
    let optionsHTML = "";
    for( let i = 0;  i < OmbroAbdomen.length; i++){
        optionsHTML += `<option value="${OmbroAbdomen[i]}">${OmbroAbdomen[i]}</option>`;
    }
   newSelect.innerHTML= `<select name="${Treino.value}" class="SelectExercicio" id="${Treino.value}" 
   data-SelectExercicio>
   <optgroup>
   ${optionsHTML}
        </optgroup>`;
    
       
  
} 



newSelect.addEventListener("change", () => {
    contado++;
    
    //let areadoTreinoId = document.getElementById(`espacoTreino_${contador}`)
         Criarinputs(newSelect.id, localDoTreinoDoDia.id)
         localDoTreinoDoDia.appendChild(espacoDoButton);
         espacoDoButton.appendChild(ButtonSalvar)
         
        
        })

        ButtonSalvar.addEventListener("click", () => {SalvarTreino()})

}




