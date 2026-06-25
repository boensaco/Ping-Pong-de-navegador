let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')
let raquetaY = 150
let pelota = { x:65 , y: 300,velx:5,vely:5}
let Jugador1 = {raqueta: 25,raquetaY:150, puntaje: 0}
let Jugador2 = {raqueta: 660,raquetaY:150, puntaje: 0}

tablero.fillStyle = 'white' 

function dibujarTablero(){
    tablero.clearRect(0,0,700,400)//Deja en blanco en todo
    tablero.fillRect(Jugador1.raqueta,Jugador1.raquetaY,20,100 )//pinta la raqueta
    tablero.fillRect(Jugador2.raqueta,Jugador2.raquetaY,20,100 )//pinta la raqueta
    //Dibuja la linea de la mitad

    for(i=0;i<=400;i= i + 15){
        tablero.fillRect(347.5,i,5,10)
    }
    tablero.beginPath()
    tablero.arc(pelota.x, pelota.y, 10,0, Math.PI * 2)
    tablero.fill()//Rellena la pelota
}

function iniciar(){
    dibujarTablero()
    dibujaPelota()
    requestAnimationFrame(iniciar)
}

iniciar()

function mueveRaqueta(){
    document.addEventListener('keydown', function(tecla){
        if(tecla.key == 'ArrowUp' ){
            Jugador2.raquetaY = Jugador2.raquetaY - 20
        }

        if(tecla.key == 'ArrowDown'){
            Jugador2.raquetaY = Jugador2.raquetaY + 20
        }

            if(tecla.key == 'w' ){
                Jugador1.raquetaY = Jugador1.raquetaY - 20
            }

            if(tecla.key == 's'){
                Jugador1.raquetaY = Jugador1.raquetaY + 20
            }
    })
}


function Jugador(){
    tablero.clearRect(0,0,700,400)//deja en blanco todo
    if(raquetaY < 0){
        raquetaY = 0    
    }
    if(raquetaY > 300){
        raquetaY =300
    }
    tablero.fillRect(25,raquetaY,20,100 )//pinta la raqueta
    //tablero.fillRect(655,raquetaY2,20,100 )//pinta la raqueta
}


function dibujarRaqueta(Jugador){
    tablero.clearRect(0,0,700,400)//deja en blanco todo
    if(raquetaY < 0){
        raquetaY = 0    
    }
    if(raquetaY > 300){
        raquetaY =300
    }
    tablero.fillRect(25,raquetaY,20,100 )//pinta la raqueta
}


function dibujaPelota(){
    // tablero.clearRect(0,0,700,400)//deja en blanco todo
    tablero.beginPath()
    pelota.x = pelota.x + pelota.velx
     pelota.y = pelota.y + pelota.vely
    //pared abajo
    if(pelota.y >= 396 || pelota.y <= 17 ){
            pelota.vely = pelota.vely * -1
    }
if(pelota.x >= 698 || pelota.x <= 10 ){
            // pelota.velx = pelota.velx + 2 * -1
            pelota.velx = pelota.velx * -1
    }
        tablero.arc(pelota.x, pelota.y, 10,0, Math.PI * 2)
        tablero.fill() //rellena la pelotañ        

}

