// Variáveis da bolinha
var xBolinha = 30;
var yBolinha = 200;
var diametro = 20;
var raio = diametro / 2;

// Velocidade Bolinha
var velocidadeXBolinha = 5;
var velocidadeYBolinha = 5;
var posicao = [50, 100, 150, 200, 250, 300, 350]
var direcao = [velocidadeXBolinha, velocidadeXBolinha *- 1]

// Placar do Jogo
var meusPontos = 0;
var PontosOponente = 0;

function mostraBolinha (){
    circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha (){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function colisaoBorda () {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;1
    }
} 

function incluiPlacar (){
    stroke (255);
    textAlign (CENTER);
    textSize (16);
    fill (color (47,79,79));
    rect (150, 10, 40, 20);
    fill (255);
    text (meusPontos, 170, 26); 
    fill (color (47,79,79))
    rect (450,10, 40, 20);
    fill (255);
    text (PontosOponente, 470, 26)
}

function marcaPonto (){
    if (xBolinha > 590) {
        meusPontos +=1;
        inicio ();
    }
    if (xBolinha <10) {
        PontosOponente += 1;
        inicio ();
    }
}

function linhaCentral(){
    rect (300, 00, 5,600)
}

function inicio (){
    xBolinha = 300;
    yBolinha = random (posicao);
    velocidadeXBolinha = random (direcao);
    velocidadeYBolinha = random (direcao);
}

