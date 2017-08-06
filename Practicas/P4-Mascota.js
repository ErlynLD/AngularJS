(function(){
    'use strict'

    function Perro(pNombre, pRaza, pAnoNac, pSexo){
        this.nombre = pNombre;
        this.raza = pRaza;
        this.anoNac = pAnoNac;
        this.sexo = pSexo;

        this.Ladrar = function(){
            console.log("Grrrr, Grrrrr, Hau Hau!!");
        }, 
        this.Comer = function(){
            console.log("Perro comiendo");
        }, 
        this.getEdad = function(){
            console.log((new Date().getFullYear() - this.anoNac) + " años.");
        },
        this.getNombreYRaza = function(){
            console.log("Nombre: " + this.nombre + "\nRaza: " + this.raza);
        },
        this.getSexo = function(){
            console.log("Sexo: " + this.sexo);
        }
    }

    var perro1 = new Perro("Lazy", "Pastor Alemán", 2003, 'F');
    perro1.getNombreYRaza();
    perro1.getEdad();
    
})();