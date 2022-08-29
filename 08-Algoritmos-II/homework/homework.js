'use strict'

//const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random()*array.length)];
  let rigth = [];
  let left = [];
  let equals = [];

  for(let i = 0; i<array.length; i++){
    if(array[i]>pivot){
      rigth.push(array[i]);
    }else if(array[i]<pivot){
      left.push(array[i]);
    }else{
      equals.push(array[i]);
    }
  }
  return quickSort(left).concat(equals).concat(quickSort(rigth));
}

function merge(left, rigth){
  let leftIndex = 0;
  let rigthIndex = 0;
  let array = [];

  while(leftIndex < left.length && rigthIndex < rigth.length){
    if(left[leftIndex] < rigth[rigthIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }else{
      array.push(rigth[rigthIndex]);
      rigthIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(rigth.slice(rigthIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;

  let middle = Math.floor(array.length/2);
  let left = array.slice(0,middle);//left = [0,middle-1]
  let rigth = array.slice(middle);//rigth = [middle, final]

  return merge(mergeSort(left), mergeSort(rigth));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
