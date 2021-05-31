const primera = function(){
    console.log("funcion tradicional")
    return "mi primera dunction tradicional";
};
/*con este pinta por pantalla: mi primera function tradcional*/
let guardarPrimera = document.getElementById("primera").innerHTML = primera();
primera();
/*sale dos veces funcion tradicional con el ultimo primera()*/
