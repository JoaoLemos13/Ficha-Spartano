const localDoTreinoDoDia = document.getElementById("FichadeTreino");
let criarEspacoDeTreino =  ""
let espacoTotalTeste = document.getElementById("areaTotal")
let contado = 0
let button = document.querySelectorAll("button");

const areasDeTreinoDaSemana = [
    "Segunda-Feira", "terça-Feira", "Quarta-Feira", "quinta-Feira", "sexta-Feira", "sabado","domingo" 
]

const TreinosDaSemana = ["Descanso",
"Peito Apenas",
"Peito + Bíceps",
"Peito + Tríceps",
"Costas e Bíceps",
"Costas e Tríceps",
"Perna Completo",
"Apenas Costas",
"Braço Completo",
"Quadricéps e Gluteo",
"Apenas Quadrícps",
"Ombro e Peito",
"Ombro e Abdômen",]


function CriarEspacoDeTreino (valordoButton) {
    contado++;
   
// Elementos HTML a ser criado quando cliacado o button

let fichaExistente = document.getElementById(`Ficha de ${valordoButton}`);
    
    // Se existir, não cria outra ficha
    if (fichaExistente) {
        console.log("Ficha já existe para", valordoButton);
        return;
    }


let criarEspacoDeTreino = document.createElement("div") 
let TextoFicha = document.createElement("h2")
let criarInputdoTreinoDodia = document.createElement("input")
let CriarSelectdosTreinos = document.createElement("select")
let EspaçoInputESelect = document.createElement("div")
let Criarbutton = document.createElement("button") 
let CriarEspacoDosExercicios = document.createElement("div")


// Caracteristicas para o espaço de treino 
criarEspacoDeTreino.id = `Ficha de ${valordoButton}`
criarEspacoDeTreino.classList = "FichasdeTreino"
//criarEspacoDeTreino.innerHTML = `<label>Treino do Dia<label>`


//Caracteristicas para o Input que será criado
criarInputdoTreinoDodia.type ="text";
criarInputdoTreinoDodia.classList = "inputdosTreinos";
criarInputdoTreinoDodia.id = "TreinoDoDia";

//Caractéristicas para o Select que será crado
CriarSelectdosTreinos.classList = "inputEscolhadeTreino";
CriarSelectdosTreinos.id = "escolhaDeTreino";

// Caracteristicas para o Button
Criarbutton.className = "bottonTrocarTreino";
Criarbutton.id = "deletarTreino";
Criarbutton.textContent= "Trocar Treino";

// Caracteristicas para a areadosExercicios
CriarEspacoDosExercicios.className = "areaDosExercicios"
CriarEspacoDosExercicios.id = `espacoDosEx ${valordoButton}`

//Caracteristicas para o texto da ficha 
TextoFicha.textContent = `Treino de ${valordoButton}`
TextoFicha.className = "TextoFicha"


// caracteristicas para a div onde terá input e select apenas para alinhar
EspaçoInputESelect.classList = "AjusteInputEselect"


TreinosDaSemana.forEach(opcao => {
    let option = document.createElement('option');
    option.text = opcao;
    CriarSelectdosTreinos.add(option);
  });


  espacoTotalTeste.appendChild (criarEspacoDeTreino);
  criarEspacoDeTreino.appendChild(TextoFicha)
  EspaçoInputESelect.appendChild(criarInputdoTreinoDodia)
  EspaçoInputESelect.appendChild (CriarSelectdosTreinos);
  criarEspacoDeTreino.appendChild(EspaçoInputESelect)
  //criarEspacoDeTreino.appendChild (Criarbutton);
  criarEspacoDeTreino.appendChild (CriarEspacoDosExercicios)


// Adiciona o Value do Select dentro do Input 
CriarSelectdosTreinos.addEventListener("change", () => {
    let opcao = CriarSelectdosTreinos.value;
    criarInputdoTreinoDodia.value = opcao


    criarSelectEx(criarInputdoTreinoDodia, CriarEspacoDosExercicios.id)
    salvarMusculodoDia(valordoButton, opcao)
    
})




}



// chama a função de criar o espeço de cada ficha de treino

button.forEach((button)=> {
    
    button.addEventListener("click", () => {  

    let bottonClicado = button.id;
   
   CriarEspacoDeTreino (bottonClicado);
 
})
})

