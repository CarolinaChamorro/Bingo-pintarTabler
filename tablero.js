var contenedor = document.getElementById("contenedor");
document.getElementById("mostrar").style.display="none";
var verNum;
var numTablero = [];
var numUsados = [];// numeros jugados
var cont=0;
graficarTabla();
document.getElementById("bJugar").addEventListener("click", function () {
    jugar();
    graficarTabla();
    mostrarNum();
});
function graficarTabla() {
    numTablero = [];
    for (var a = 1; a < 91; a++) {
        numTablero.push(a);
        var casillero = document.createElement('div');
        casillero.className = 'celdas';
        casillero.id = a;
         
        for (var b = 0; b < numUsados.length; b++) {
            //REVISA ESTA CONDICION OJO
            cont=a;
            if (numUsados[b] === cont) {
                //se genera un mensaje en orden ascendente
                //console.log("encontrado " + casillero.id + "  y " + numUsados[b]);
                casillero.style.backgroundColor = "green";
            }
        }
        casillero.appendChild(document.createTextNode(a));
        contenedor.appendChild(casillero);
        cont++;
    }
}

function jugar() {
    contenedor.innerHTML = "";
    var serie = generarNumero(0, 90);
    if ((numUsados.includes(serie) || numUsados === []) && numUsados.length < 91) {
        console.log("ya existe el numero : " + serie);
        jugar();
    } else if (numUsados.length <91) {
        verNum=serie;
        numUsados.push(serie);
        //numeros que se van a guardar
        console.log("numero guardado",numUsados[numUsados.length - 1]);
    } else {
        var marco=document.getElementById("mostrar");
        marco.style.backgroundColor = "pink";
        alert("Todos los numeros ya han sido jugados");
    }
    document.getElementById("verNumero").innerHTML=verNum;
}
function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function mostrarNum(){
    document.getElementById("mostrar").style.display="block";
}
