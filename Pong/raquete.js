// Variaveis da Raquete
var raqueteComprimento = 10;
var raqueteAltura = 90;

// Variaveis Minha Raquete
var xRaquete = 5;
var yRaquete = 150;

// Variaveis Raquete Oponente
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var velocidadeYOonente;
var chancheErrar = 12;

var colidiu = false;

function mostraRaquete (x, y){
    rect (x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete (){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function movimentaRaqueteOponente (){
    velocidadeYOonente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 + 11;
    yRaqueteOponente += velocidadeYOonente;
}

function colisaoRaquete (){
    if(xBolinha - raio < xRaquete+ raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha+ raio > yRaquete)
    velocidadeXBolinha *= -1;
}
  
function colisaoRaquete (x, y) {
   colidiu =  collideRectCircle( x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
   if (colidiu){
     velocidadeXBolinha *= -1;
    }
}








