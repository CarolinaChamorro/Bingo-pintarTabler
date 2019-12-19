var contenedor = document.getElementById("contenedor");
var numTablero = [];
var numUsados = [];// numeros jugados
var cont=0;
graficarTabla();
document.getElementById("bJugar").addEventListener("click", function () {
    jugar();
    graficarTabla();
});

function graficarTabla() {
    numTablero = [];
    for (var a = 1; a < 91; a++) {
        numTablero.push(a);
        var casillero = document.createElement('div');
        casillero.className = 'celdas';
        casillero.id = a;
         cont=casillero.id;
         
        for (var b = 0; b < numUsados.length; b++) {
            //REVISA ESTA CONDICION OJO
            if (numUsados[numUsados.length - 1] === cont) {
                console.log("encontrado " + casillero.id + "  y " + numUsados[b]);
                casillero.style.backgroundColor = "green";
            }else{
                console.log("no se ha encontrado numero");
            }

        }
        casillero.appendChild(document.createTextNode(a));
        contenedor.appendChild(casillero);
        casillero.id++;
    }
}

function jugar() {
    contenedor.innerHTML = "";
    var serie = generarNumero(0, 90);
    if ((numUsados.includes(serie) || numUsados === []) && numUsados.length < 90) {
        console.log("ya existe el numero : " + serie);
        jugar();
    } else if (numUsados.length < 90) {
        numUsados.push(serie);
        //numeros que se van a guardar
        console.log("numero guardado",numUsados[numUsados.length - 1]);
    } else {
        alert("Todos los numeros ya han sido jugados");
    }
}
function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}