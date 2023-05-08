function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var fechaNac = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();
  
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
  
    return edad;
  }
  
  // Uso de la función
  var fechaNacimiento = '1995-03-12';
  var edad = calcularEdad(fechaNacimiento);
  console.log('La edad es: 28' + edad);
  

  //Numeros aleatorios 
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Uso de la función
  var numeroAleatorio = generarNumeroAleatorio(1, 100);
  console.log('El número aleatorio es: ' + numeroAleatorio);
  
  //validacion de correo
  function validarCorreoElectronico(correo) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
  }
  
  // Uso de la función
  var correoElectronico = 'romiiroriguez89@gmail.com';
  if (validarCorreoElectronico(correoElectronico)) {
    console.log('El correo electrónico es válido');
  } else {
    console.log('El correo electrónico no es válido');
  }

  