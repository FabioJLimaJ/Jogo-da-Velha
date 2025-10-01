var jogoDaVelha = [0, 1, 2,
                   3, 4, 5,
                   6, 7, 8]
    
 const condicoesDeVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ]

var escolha = 0

const btnsEscolha = document.querySelectorAll(".escolha");
 btnsEscolha[2].disabled = true
    btnsEscolha[0].addEventListener("click", function(){
        escolha = 1
        btnsEscolha[2].disabled = false
        document.querySelector(".msg").innerHTML = "X"
    })
    btnsEscolha[1].addEventListener("click", function(){
        escolha = 2
         btnsEscolha[2].disabled = false
         document.querySelector(".msg").innerHTML = "O"
    })


const quadrados = document.querySelectorAll(".quadradinhos");

for (let i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener("click", function(){

            if(escolha == 1){

                quadrados[i].textContent = "X"
                quadrados[i].disabled = true
                jogoDaVelha[i] = "X"
                escolha = 2
                document.querySelector(".msg").innerHTML = "O"
                if(verificar("X")){
                    alert("jogador X venceu")
                    location.reload()
                    
                }
            }else{

                quadrados[i].textContent = "O"
                quadrados[i].disabled = true
                jogoDaVelha[i] = "O"
                escolha = 1
                document.querySelector(".msg").innerHTML = "X"
                if(verificar("O")){
                    alert("jogador O venceu")
                    location.reload()
                    
                }
          
            }

            if([...quadrados].every(q => q.disabled)){
                alert("deu velha")
                location.reload()
                
            }
        
    })

    function verificar (jogador) {
        return condicoesDeVitoria.some(jog =>
            jog.every(i => jogoDaVelha[i] === jogador)
        );
    }

}
