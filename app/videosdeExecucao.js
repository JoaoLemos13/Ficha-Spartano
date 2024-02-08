//CLIQUE E COMEÇAR O VÍDEO
window.addEventListener("load", () =>{
  let espacoVideo = document.querySelectorAll(".espacoCheckBox")
let inputs = document.querySelectorAll("input");
const videoContainer = document.getElementById('videos');
let videoIndex = 0;
let selectIndex = 0;
let currentVideoSection = null;


videoContainer.hidden = "false";

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
        if (currentVideoSection) {
          currentVideoSection.parentNode.removeChild(currentVideoSection); // Remover o elemento secaoVideo anterior, se existir
        }
        const secaoVideo = CriarCaixaVideo(iframe); // Chamando a função para criar o novo elemento secaoVideo
        input.parentNode.insertAdjacentElement('afterend', secaoVideo); // Inserir o secaoVideo logo após o input
        currentVideoSection = secaoVideo; // Atualizar o valor do elemento atual para remoção posterior
      } else {
        iframe.style.display = 'none';
      }
      
    
      let ElementoFechaVideo = document.getElementById("fecharVideo")
      let secaoVideo = document.getElementById("videoSection")
      console.log(secaoVideo)
        ElementoFechaVideo.addEventListener("click", () => {
          secaoVideo.style.display = "none"
        })



    });
  })});

 

videoContainer.hidden = "true";



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

window.addEventListener("load", () => {
  SeletdosTreinosDias.forEach((select) => {
      select.addEventListener("change", () => {
          let selectEscolhido = select.options[select.selectedIndex].value;
          
          
          selectdosExercicios.forEach((selectEx) => {
              if (selectEx.name === selectEscolhido) {
                
                  if (!selectEx.classList.contains("hidden")) {
                      selectEx.style.display = "none";
                  }
              } else {
                  selectEx.style.display = "block";
              }
              console.log(selectEscolhido)
          });
      });
  });
});

