
var nombre = "romina";
var altura = 160;
/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>soy la caja de datos</h1> 
<h2>mi nombre es: ${nombre}</h2> 
<h3>mido: ${altura} cm </h3>`;

if(altura >= 165){
    datos.innerHTML += '<h1>esres una persona estandar</h1>'
}else{
    datos.innerHTML += '<h1>esres una persona baja</h1>'
}
for(var i = 1; i<=20; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
*/


function muestraminombre(nombre, altura){
    var misdatos =`
            <h1>soy la caja de datos</h1> 
            <h2>mi nombre es: ${nombre}</h2> 
            <h3>mido: ${altura} cm </h3>`;
return misdatos;
}
function imprimir(){
    var datos = document.getElementById("datos");
        datos.innerHTML = muestraminombre("Romina Rodriguez, 165");

}

imprimir();

var nombres = ['romina', 'amir', 'reno'];

document.write('<h1>listado de nombres</h1>');
/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] +'<br/>');
}
*/
nombres.forEach ((nombre) => {
    document.write(nombres +'<br/>');
});
