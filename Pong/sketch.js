

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha (); 
  colisaoBorda ();
  mostraRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  colisaoRaquete (xRaquete, yRaquete);
  colisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete ();
  movimentaRaqueteOponente ();
  incluiPlacar ();
  marcaPonto ();
  linhaCentral ();
}

