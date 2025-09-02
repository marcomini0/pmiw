// Mini Marco
//Com1
//https://www.youtube.com/watch?v=pDUIrJTbRE4

let Imagen;

function preload() {
  Imagen = loadImage("data/02.jpg");
}


function setup() {
  createCanvas (800, 400);
  Imagen = loadImage("data/02.jpg");
}


function draw() {
  Cambio ();
  image (Imagen, 0, 0);
  dibujarPatron (412, 323, 6, 370);
}
