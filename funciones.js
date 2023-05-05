//funciones 

//funciones declarativas porque comienzan con la palabra funcion
    function miprimerfuncion(){
    return 23;

};
console.log(miprimerfuncion());

    function segundafuncion(a,b){
    return a + b;
};
 console.log(segundafuncion(2,2));

    function mitercerfuncion(a,b){
    var mul = a * b;
    return mul -2;
 };
 console.log(mitercerfuncion(10,10));

 //funciones de tipo expresion

    var tipodos = function(){
    return 12;
 }

 console.log(tipodos());

 //template literals
    function minombre(nom){
     var nombre =`${nom}`;
     return nombre;
 } 

 console.log(minombre(`romina`));
