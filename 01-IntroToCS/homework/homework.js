'use strict'

//const { TestWatcher } = require("jest");


function BinarioADecimal(num) {

  let binaryStr = num.toString(), arra = [], result = 0;
  
  for(var i=0; i<binaryStr.length; i++){
      arra.unshift(Math.pow(2,i));
  }
  
  for(var j=0; j<binaryStr.length; j++){
  
      if(binaryStr.charAt(j) === "1"){
          result += arra[j];
      }
  }
  
  return result;
}

function DecimalABinario(num) {
 
  let residuo = [];

  while(num > 0){

       residuo.unshift(num%2);

       num = Math.floor(num/2);
   }
   return  residuo.join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}