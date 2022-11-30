const character = document.getElementsByClassName("character")[0];//Busca o primeiro elemento que tem a classe "character"
const containerCharacter = document.getElementsByClassName("container-character")[0];//Busca o primeiro elemento que tem a classe "container-character"


const VELOCITY = 10;//atribui um valor constante igual a 10 a "VELOCITY"

const SCREEN_WIDTH = screen.width;//retorna a largura da tela
const SCREEN_HEIGHT = screen.height;//retorna a altura da tela

let xPosition = 500;//atribui um valor no eixo X
let yPosition = 300;//atribui um valor no eixo y

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]//atribui à variavel as chaves disponiveis
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];//atribui à variavel as direções que podem ser seguidas

window.addEventListener("keydown", (event) => {//adiciona ao programa um manipulador de eventos que lê quando alguma tecla é pressionada
    const key  = event.key;//guarda na variável a tecla pressionada

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {//verifica se a tecla pressionada é uma tecla disponível 
        return currentKey === key;//caso seja disponivel ela irá ficar guardada 
    })

    if(!keyPressedAvaiable) return;//caso não seja disponivel não guardará nada

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })//caso tenha algum valor armazenado como "direction" ele será removido

    if(xPosition>0 && xPosition<SCREEN_WIDTH && yPosition>0 && yPosition<SCREEN_HEIGHT){

        if(key === "ArrowUp"){//verifica se a tecla pressionada equivale a seta para cima
            character.classList.add("turnUp");//caso tenha sido a seta para cima a ser pressionada, o Jaypers virará para cima
            yPosition -= VELOCITY;//Jaypers se moverá para cima
        }

        if(key === "ArrowDown"){//verifica se a tecla pressionada equivale a seta para baixo
            character.classList.add("turnDown");//caso tenha sido a seta para baixo a ser pressionada, o Jaypers virará para baixo
            yPosition += VELOCITY;//Jaypers se moverá para baixo
        }

        if(key === "ArrowLeft"){//verifica se a tecla pressionada equivale a seta para esquerda
            character.classList.add("turnLeft");//caso tenha sido a seta para esquerda a ser pressionada, o Jaypers virará para esquerda
            xPosition -= VELOCITY;//Jaypers se moverá para esquerda
        }

        if(key === "ArrowRight"){//verifica se a tecla pressionada equivale a seta para direita
            character.classList.add("turnRight");//caso tenha sido a seta para direita a ser pressionada, o Jaypers virará para direita
            xPosition += VELOCITY;//Jaypers se moverá para direita
        }
        containerCharacter.style.top = `${yPosition}px`;//indica a nova posição em relação a y após movimentar-se, tomando como base o limite superior
        containerCharacter.style.left = `${xPosition}px`//indica a nova posição em relação a x após movimentar-se, tomando como base o limite a esquerda
    }
});

