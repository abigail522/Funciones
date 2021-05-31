const start ={

    cargando: function(){
        console.log("espere...")
        return "espere mientras se carge la página..."
    },
    dentro: function(){
        return"accediendo a la página...";

    },

}
let cargar=document.getElementById('uno').innerHTML=start.cargando();

let entrar=document.getElementById('dos').innerHTML=start.dentro();

/*agregar una propiedad despues de que el código se haya ejecutado:*/
start.salir= function(nombre){
    console.log(`saliendo de..${nombre}`);
    return 'exit...'
}
/*star s.salir("mipagina)")*/
let exit=document.querySelector('button').innerHTML=start.salir('hhhh');
start.salir("mi pagina..");
start.salir("abigail");
star.salir("apagado");
