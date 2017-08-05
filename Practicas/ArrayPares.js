/**
 * Define una función que reciba como parametro un número x y esta 
 * devuelva un array con los numeros pares del 0 al número x.

Requerimientos del código:

Defina una funcion llamada 'numeroPares'.
Definir una variable dentro de la funcion llamada 'arrayPar'.
Use un bucle FOR.
Use el condicional IF para determinar si el numero es par.
Use push para agregar valores a 'arrayPar'.
Use return para devolver el array 'arrayPar'.
 * 
 */

 (
     function()
     {
         'use strict'
         var numerosPares = function(numero)
         {
            if(typeof(numero) == "number")
            {
                var arrayPar = [];    

                if(numero >= 0){
                    for(var i = 0; i <= numero; i++)
                    {
                        if(i % 2 == 0)
                            arrayPar.push(i);
                    }
                }else{
                    console.log("Especifique un número positivo.");
                }

                console.log("El arreglo obtenido es: ", arrayPar);
                console.log(arrayPar);

            }else
            {
                console.log("Debe proporcionar un dato numérico.");
            }
         }

         numerosPares(10);

        // console.log(typeof(8));
     }
 )();
    