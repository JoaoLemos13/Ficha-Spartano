//CLIQUE E COMEÇAR O VÍDEO

window.addEventListener("load", () =>{
  let espacoVideo = document.querySelectorAll(".espacoCheckBox");
  let checkBox = document.querySelectorAll("span")

let inputs = document.querySelectorAll("input");
const videoContainer = document.getElementById('videos');
let videoIndex = 0;
let selectIndex = 0;
let currentVideoSection = null;


//Aparecer o video após o click
inputs.forEach((input) => {
  input.addEventListener('click', () => {
    

    let valor = input.value;

    let src = videosData[valor].src
  

    let videos = `<iframe id="${valor}" width="560" height="315" src="${src}" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    videoContainer.innerHTML = videos


  let iframe = document.getElementById(valor)

  console.log(iframe)
 
      let videoId = iframe.id;
      console.log(videoId)

      if (videoId === valor) {
        iframe.style.display = 'inline';
        checkBox.forEach((check) => {
          console.log(check)
          let CheckMarcado = check.className;
          if(CheckMarcado === "i-akar-icons-circle-fill"){
            console.log(CheckMarcado)
        if (currentVideoSection) {

          currentVideoSection.parentNode.removeChild(currentVideoSection); // Remover o elemento secaoVideo anterior, se existir
        }
        let secaoVideo = CriarCaixaVideo(iframe); // Chamando a função para criar o novo elemento secaoVideo
        input.parentNode.insertAdjacentElement('afterend', secaoVideo); // Inserir o secaoVideo logo após o input
        currentVideoSection = secaoVideo; // Atualizar o valor do elemento atual para remoção posterior
      }
    })
      } else {
        iframe.style.display = 'none';
      }
      
    
      let ElementoFechaVideo = document.getElementById("fecharVideo")
      let secaoVideo = document.getElementById("videoSection")
      console.log(secaoVideo)
        ElementoFechaVideo.addEventListener("click", () => {
          secaoVideo.style.display = "none"
        })

        
      
      
      }  

)})
/*
checkBox.forEach((check) => {

  check.addEventListener("click", () => {
if (check.className === "i-akar-icons-circle-check-fill") {
 
  let secaoVideo = document.getElementById("videoSection")
  console.log(secaoVideo)
  secaoVideo.style.display = "none"
  

}

 
}) }) */



});



  



// posicionamento do Select para cada Exercicio

/*
selectdosExercicios.forEach((select) => {
  if (!select.hidden) {
    myInputTreinoSegunda.parentNode.insertBefore(select, myInputTreinoSegunda.nextSibling);
  }
});*/
/*
window.addEventListener("load", () => {
  SeletdosTreinosDias.forEach((select)  =>  {
select.addEventListener("change", () => {
let selectEscolhido = select.options[select.selectedIndex].value;
selectdosExercicios.forEach((select1) => {
let selectEx = select1.id
console.log(selectEx)
console.log(selectEscolhido)
if (selectEscolhido === selectEx) {
 // selectEx.parentNode.insertBefore(selectEx, treinodoDia.nextSibling);
//console.log(select1Element.prototype)

}

}) 



//select.options[mySelect.selectedIndex].value;
})


})})*/



//função para criar o elemento Div que irá ficar os vídeos
function CriarCaixaVideo(video) {

  const ElementoFechaVideo = document.createElement("span")
  ElementoFechaVideo.textContent = "X";
  ElementoFechaVideo.className = "i-akar-icons-circle-x-fill";
  ElementoFechaVideo.id = "fecharVideo";
  const secaoVideo = document.createElement("div"); 
  secaoVideo.className = "secaoVideo";
  secaoVideo.id = `videoSection`; // Gerar um id único para cada elemento secaoVideo

  const videoClone = video.cloneNode(true); // Clonar o elemento de vídeo para evitar a tentativa de inserção duplicada
  videoClone.style.display = 'inline'; // Garantir que o vídeo clonado esteja visível
  secaoVideo.appendChild(ElementoFechaVideo)
  secaoVideo.appendChild(videoClone); // Adicionar o vídeo clonado ao novo elemento secaoVideo

  return secaoVideo;
}