/*a y b son parametros (o variables) y son representativos*/
function acumulado( a, b){
    console.log(a + b);
}

acumulado(15,24); //15 y 23 son argumentos y son datos reales*/
console.log(500,800);/*puedo ir combinando los valores sumando cantidades mas  complejasd*/
function registrar (nombre, apellido){
    console.log(`El alumno es: ${nombre} ${apellidos}`)
}
registrar("José", "Serrano")
resgistro ("Andrés");/*sacará por consola Jose undefined porque no ge dado valor a la variable del apellido como en la linea 10*/

/*parametros po defecto: en caso tal pase dos parametros a la función pero que cuando mande a llamar a dicha función no obtenga datos, podemos preverr esto y poner en los parametros valores por defecto*/
function almacenar( usrio='', telefono =''){ comsole.log(`Hola ${usuario},${telefono}te has registrado en...`);}


function direccion (d=``){
    console.log("calle nuevo, 20")
}
direccion();
