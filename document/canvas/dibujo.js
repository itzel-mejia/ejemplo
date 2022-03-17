var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}
   function dibujoPorClick()
{
var xxx = texto.value;
var lineas = parseInt;
var l = 0;
var yi, xf;
var yf, xi;
var xf2;
var colorcito = "#D2B4DE";

for (var l = 0; l < xxx; l++){

    yf = yi = 10 * l;
    xi = xf = 10 * ( l + 1);
    xf2 = xi2 = 290 - (l * 10);
dibujarLinea(colorcito, xi, 0, 300, yf);
dibujarLinea(colorcito, 0, yi, xf, 300);
dibujarLinea(colorcito, 300, yi, xf2, 300);
dibujarLinea(colorcito, xi2, 0, 0, yf);
console.log("Linea " + l);
}

    
}
