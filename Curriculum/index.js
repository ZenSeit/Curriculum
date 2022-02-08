// PARA ACTIVAR LA FUNCION DE CAMBIO DE COLOR SE DEBE HACER CLICK EN LA FOTO


var des = document.getElementsByClassName("desplegar"); //Se capturan los elementos que pertenecen a la clase "desplegar"
for (var i = 0; i < des.length; i++) { //Con el bucle for recorremos los elementos que tenemos en la variable "des"
  des[i].addEventListener("click", function () {

    /*Activador para mostrar el texto a desplegar de infob. el estado inicial es oculto*/
    var infob = this.nextElementSibling;
    if (infob.style.display === "block") {
      infob.style.display = "none";
    } else {
      infob.style.display = "block";
    }
  });
}

let cont = 0;
let btncolor = document.getElementById("pb"); //Se capturan el elemento con el tag id="pb"
btncolor.addEventListener("click", chan_color);
function chan_color() { //Con esta funcion se cambian los colores de los titulos, excepto el fondo que contiene el nombre y el titulo
  cont++;
  var btncol = document.getElementsByClassName("desplegar");
  var nortit = document.getElementsByClassName("tit");
  if (cont % 2 == 0) {
    for (var n = 0; n < nortit.length; n++) { nortit[n].setAttribute("style", "background: linear-gradient(110deg, #050468d8 60%, #0b1969d3 60%);")} //Fondo azul
    for (var i = 0; i < btncol.length; i++) { btncol[i].setAttribute("style", "background: linear-gradient(110deg, #050468d8 60%, #0b1969d3 60%);")}
  } else {
    for (var n = 0; n < nortit.length; n++) { nortit[n].setAttribute("style", "background: linear-gradient(110deg, #d84805d8 60%, #e24608c5 60%);")} //Fondo rojo
    for (var i = 0; i < btncol.length; i++) { btncol[i].setAttribute("style", "background: linear-gradient(110deg, #d84805d8 60%, #e24608c5 60%);") }
  }
}