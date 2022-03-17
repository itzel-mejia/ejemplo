var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#D2B4DE";

for (l = 0; l < lineas; l++)
{
    yi = 10 * l;
dibujarLinea(colorcito, xi, 0, 300, yf);
dibujarLinea(colorcito, 0, yi, xf, 300);
dibujarLinea(colorcito, 300, yi, xf2, 300);
dibujarLinea(colorcito, xi2, 0, 0, yf);
console.log("Linea " + l);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}