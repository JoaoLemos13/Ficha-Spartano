const nivelDetreino =  document.querySelectorAll("#nivel");
const dias = document.querySelectorAll("#dias");
const musculoEnfase = document.querySelectorAll("#m")

nivel()
diasQ()
musculoEnfaseQ()


function nivel () {
nivelDetreino.forEach((n) => {
   n.addEventListener("click", () => {
      let nivel = n.name
      console.log(nivel);
      return nivel
   })
})

}

function diasQ () {
   dias.forEach((d) => {
      d.addEventListener("click", () => {
         let dias = d.name
         console.log(dias);
         return dias
      })
   })
   }

   function musculoEnfaseQ () {
      musculoEnfase.forEach((m) => {
         m.addEventListener("click", () => {
            let enfase = m.name
            console.log(enfase);
            return enfase
         })
      })
      }

  criarTreinoAleatório("iniciante", "3dias", "nao")
function criarTreinoAleatório (nivel, dias, musculoEnfase) {
   let indice = Math.floor(Math.random()*10)
   if (nivel === "iniciante" && dias === "3dias" && musculoEnfase === "nao") {
      for(let i = 0; peitoTrícps.length; i++){
         console.log(peitoTrícps[indice])
      }

   }

}