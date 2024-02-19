
let i = 0



        // Chame a função Criarinputs para criar e adicionar os inputs ao DOM
     
        
        function Criarinputs(opcao, espacoDaFicha) {
            // Crie um elemento de input
            let inputEx = document.createElement("input");
            inputEx.type = "text";
            inputEx.placeholder = "";
            inputEx.classList = "ex"
            
           
            // adiciona o valor do select dos exercicios dentro do input
            selectExercicios = document.getElementById(opcao)
            
           let inputValue = selectExercicios.options[selectExercicios.selectedIndex].value;
           inputEx.value = inputValue;

          
          



           // esquema para pegar a sting do dia da semana
           let areadosExSemSalvar = document.getElementById(espacoDaFicha) 
           let espacoDaFichaFeita = areadosExSemSalvar.id
           let espacoDaFichaFeitaextraida = espacoDaFichaFeita.slice(12)

           salvarTreino(inputValue, espacoDaFichaFeitaextraida);
            // Obtenha a referência ao elemento onde você deseja adicionar o input
           // let espacoSegundaFeira = document.querySelector("#exerciciosSegunda");
          
  // Opcionalmente, você pode adicionar um rótulo (label) para o input
  let label = document.createElement("label");
  
    
    inputEx.id = i
    i++
    if(i < selectExercicios.options.length){
  //label.textContent = `${i}° Exercicío`; 
  areadosExSemSalvar.appendChild(label)
let labelNome = label.textContent
  salvarLabel(labelNome, espacoDaFichaFeitaextraida )

            // Adicione o input ao DOM
            areadosExSemSalvar.appendChild(inputEx);
          } else {i =0}
          
            

// Chamada da Função CriarInputs 


inputEx.addEventListener("change", () => {

  selectExercicios = document.querySelector("#exercicios") 
  for(let i = 0; i< selectExercicios.options.length; i++ ){
selectExercicios.addEventListener("change", () => {
    Criarinputs()
})
}})
        }


        function SalvarTreino () {
          window.location.reload()
        }

