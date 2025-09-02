function Cambio () {
  cambiarFondo (false);
  if (mouseIsPressed) {
    cambiarFondo ();
  }
}

function cambiarFondo (estadoNegro = true ) {
  if (estadoNegro) {
    background(0);
  } else {
    background(255);
  }
}

function dibujarPatron (posInicioX, posY, contadorInicial, espacio) {

  let arreglo = 3;
  let color_;

  for ( let contador_ = contadorInicial; contador_ <=700; contador_ += 3 ) {
    let diametro = calculoEscala (espacio, contador_);
    let posX = posInicioX;

    for (let i = 0; i < contador_; i++) {

      let radioX = posX + (diametro/2);
      let radioY = posY + (diametro/2);

      let distancia = dist(mouseX, mouseY, radioX, radioY);

      if (distancia <= diametro *2) {
        color_ = 255;
      } else {
        color_ = 0;
      }

      noStroke();
      ellipseMode (CORNER);
      fill (color_);
      ellipse (posX, posY, diametro, diametro);
      posX = posX + diametro;
    }

    posY = (posY  - diametro) + diametro / arreglo ;
    arreglo += 1.2;
  }
}

function  calculoEscala (ancho, cantidad) {
  return ancho / cantidad;
}
