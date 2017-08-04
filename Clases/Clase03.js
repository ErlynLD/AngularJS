/*
 * Esta clase trata los objetos en JS
 */

 (function(){
     'use strict'

     /* var carro = {
         marca: "Honda",
         modelo: "X", 
         anio: 2017,
         encendido: function(){
             console.log("Su " + this.marca + " está encendido.");
         }
     } */

     var carro1 = new Carro("Tesla");
     var carro2 = new Carro("Honda");

     carro1.encendido();
     carro2.encendido();

     function Carro(marca){
         this.marca = marca;
         this.modelo = 'X';

         this.encendido = function(){
             console.log("Su " + this.marca + " está encendido.");
         }
     }

 })();