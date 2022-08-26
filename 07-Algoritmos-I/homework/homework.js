'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var result = [1];
  var num2 = 2;

    while(num>1){
      if(num%num2 === 0){
      result.push(num2);
      num = num/num2;
      }else{
        num2++;
      }
    }
    
  
  //result.sort((a, b) => a - b);
  return result;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let i = 0;
  let condicion = true;
  while(condicion){
    condicion = false;
    for(let i = 1; i<array.length; i++){
      if(array[i-1] > array[i]){
        let pos1 = array[i-1];
        array[i-1] = array[i];
        array[i] = pos1;
        condicion = true;
      }
    }
    i++
  } 
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++){  
     let aux = array[i];
      let j = i - 1;

      while (j >= 0 && aux < array[j]){ 
          array[j+1] = array[j]; 
          j--;  
      }  
     array[j + 1] = aux; 
  } 
  
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let n = array.length;
        
  for(let i = 0; i < n; i++) {
      
      let min = i;
      for(let j = i+1; j < n; j++){
          if(array[j] < array[min]) {
              min=j; 
          }
       }
       if (min != i) {
          
           let tmp = array[i]; 
           array[i] = array[min];
           array[min] = tmp;      
      }
  }

  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
