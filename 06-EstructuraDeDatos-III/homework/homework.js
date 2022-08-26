"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
   hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinarySearchTree.prototype.size = function(){
  if(this.left === null && this.right === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.left === null && this.right !== null) return 1 + this.right.size();
  if(this.left !== null && this.right !== null) return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.insert = function(value){

    if(value < this.value){
      if(this.left === null){
      this.left = new BinarySearchTree(value);
      }else{
        this.left.insert(value);
      }
    }

    if(value > this.value){
      if(this.right === null){
        this.right = new BinarySearchTree(value);
      }else{
        this.right.insert(value);
      }
      
    }
}

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }

  if(value > this.value){
    if(this.right === null) return false;
    else return this.right.contains(value);
  }
  if(value < this.value){
    if(this.left === null) return false;
    else return this.left.contains(value);
  }

}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order = "in-order"){
  
  if(order === "pre-order"){
      //agrea root primero
      cb(this.value);
      if(this.left !== null) this.left.depthFirstForEach(cb,order);
      if(this.right !== null) this.right.depthFirstForEach(cb,order);
  }

  if(order === "post-order"){
    if(this.left !== null) this.left.depthFirstForEach(cb,order);
    if(this.right !== null) this.right.depthFirstForEach(cb,order);
    cb(this.value);
  }
  
  if(order === "in-order"){
    if(this.left !== null) this.left.depthFirstForEach(cb,order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb,order);
  }
  
}




BinarySearchTree.prototype.breadthFirstForEach = function(cb, result = []){
  
  if(this.left !== null){
    result.push(this.left);
  }
  if(this.right !== null){
    result.push(this.right);
  }
  cb(this.value);

  if(result.length>0){
    result.shift().breadthFirstForEach(cb, result);
  }
  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
