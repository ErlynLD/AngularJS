/*
    Práctica No. 2: Par o impar
 */

 (function(){
     'use strict'

     var imprimirNumeros = function(numero){
        if (numero >= 0) {
            for(var i = 0; i <= numero; i++){
                parImpar(i);
            }
        } else {
            console.log("Debe ser un número positivo.");
        }
     }

     var parImpar = function(num){
         if(num % 2 == 0){
             console.log("(", num, ") par.");
         }else{
             console.log("(", num, ") impar.");
         }
     }

     imprimirNumeros(4);
 })();