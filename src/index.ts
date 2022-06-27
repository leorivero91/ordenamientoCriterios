//array nombre(texto), array edad y altura(numero) tamaño N, ordenar los tres por edad, en caso de igual por altura
//los intercambios tienen que ser de los tres a la vez
let tamanio = Number(prompt("Ingrese el tamaño de los arreglos a cargar"));
let arregloNombres: string[] = new Array(tamanio);
let arregloEdad: number[] = new Array(tamanio);
let arregloAltura: number[] = new Array(tamanio);
//se cargan los datos de los 3 arreglos, los nombres se ingresan, y las edades y alturas aleatorias
function cargarDatos() {
  for (let indice: number = 0; indice < tamanio; indice++) {
    arregloNombres[indice] = String(
      prompt(`Cargando dato Nro ${indice + 1}\nIngrese el nombre:`)
    );
    arregloEdad[indice] = Math.floor(Math.random() * (60 - 20) + 20);
    arregloAltura[indice] = Math.floor(Math.random() * (200 - 120) + 120);
    console.log(arregloNombres[indice]);
    console.log("La edad ingresada es " + arregloEdad[indice]"años");
    console.log("La altura ingresada es " + arregloAltura[indice]"cm");
  }
}
//se intercambian los valores
function swap(array: any[], i: number, j: number) {
  let aux: any;
  aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}
//ordenamiento de los datos
function ordenamiento() {
  for (let i: number = 0; i < arregloEdad.length; i++) {
    for (let j: number = 0; j < arregloEdad.length; j++) {
      if (arregloEdad[j] > arregloEdad[j + 1]) {
        swap(arregloEdad, j, j + 1);
        swap(arregloNombres, j, j + 1);
        swap(arregloAltura, j, j + 1);
      } else if (arregloEdad[j] === arregloEdad[j + 1]) {
        if (arregloAltura[j] > arregloAltura[j + 1]) {
          swap(arregloEdad, j, j + 1);
          swap(arregloNombres, j, j + 1);
          swap(arregloAltura, j, j + 1);
        }
      }
    }
  }
}
//mostrando los datos cargados
function muestreoDatos() {
  for (let indice: number = 0; indice < arregloNombres.length; indice++) {
    console.log(
      `Dato Persona posicion ${indice + 1}\n    Nombre: ${
        arregloNombres[indice]
      }   Edad: ${arregloEdad[indice]} años  Altura: ${arregloAltura[indice]}cm`
    );
  }
}

cargarDatos();
muestreoDatos();
console.log("Ordenando los datos");
ordenamiento();
muestreoDatos();
