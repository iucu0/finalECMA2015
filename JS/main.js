//* Accedemos al formulario y recuperamos los datos de un alumno //

document.addEventListener("DOMContentLoaded", function () {
  alert("La página ya está cargada");
  document.getElementById("form").addEventListener("submit", validarFormulario);
});

function validarFormulario(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    alert("El campo 'nombre' no puede estar vacío");
    return;
  }

  let apellido = document.getElementById("apellido").value;
  if (apellido === "") {
    alert("El campo 'apellido' no puede estar vacío");
    return;
  }

  let email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Por favor, ingrese un correo válido");
    return;
  }

  let edad = document.getElementById("edad").value;
  if (edad === "" || isNaN(edad)) {
    alert("Por favor, ingrese una edad válida");
    return;
  }

  if (edad < 1) {
    alert("No puede tener menos de 1 año para registrarte");
    return;
  }

  if (edad > 120) {
    alert("No se lo cree ni usted, crack");
    return;
  }

  this.submit();
}

//* Clase para instanciar alumnos (mismos conceptos que en el formulario) //

class Alumn {
  nombre;
  apellido;
  email;
  edad;

  constructor(nombreIn, apellidoIn, emailIn, edadIn) {
    this.nombre = nombreIn;
    this.apellido = apellidoIn;
    this.email = emailIn;
    this.edad = edadIn;
  }

  getName() {
    return this.nombre;
  }

  getEmail() {
    return this.email;
  }

  getAgePlus10(ten) {
    return this.edad + ten;
  }
}

let alumno1 = new Alumn("Igna", "Iucu", "ignaiucu17@gmail.com", 25);

console.log(alumno1);
console.log(alumno1.getName());
console.log(alumno1.getEmail());
console.log(alumno1.getAgePlus10(10));

//* Función que devuelve una promesa con un objeto de alumno. //

function devuelvePromesa() {
  return new Promise((resolve, reject) => {
    const alumno2 = {
      nombre: "Igna",
      apellido: "Iucu",
      email: "igna7_17@hotmail.com",
      edad: 25,
    };

    if (isNaN (alumno2.edad)) {
      reject({ mensaje: "Incorrecto, vuelva a intentarlo" });
    }

    setTimeout(() => {
      resolve(alumno2);
    }, 2000);
  });
}

devuelvePromesa()
  .then((alumno2) => {
    console.log(alumno2);
  })
  .catch((error) => {
    console.error(error);
  });

//* Creación de una función con el patrón "async-await" que invoque la anterior 
// para ser disparada desde el formulario. //

function getAge(edad) {
  if (edad <= 25) {
    return "Eres joven: ";
  }

  if (edad > 25) {
    return "Eres viejo: ";
  }
}

async function yourAge() {
  try{
  let alumno2 = await devuelvePromesa();
  let message = getAge(alumno2.edad);
  console.log(message + alumno2.edad);
} catch (err) {
  console.error(err);
}
}

yourAge();

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let edad = document.getElementById('edad').value;
  
  if (isNaN(edad) || edad === "" || edad < 1 || edad >= 120) {
    return;
  }

  yourAge(edad);
});


//* Consumo de la promesa en el patrón async-await. //
//HECHO//

//* Consumo de error en patrón async-await. //
//HECHO//