(function(){
    class Animal{
        this.nombre = "";

        Animal(nombre){
            this.nombre = nombre;
        }
    }

    class Perro extends Animal{
        
        perro(nombre){
            this.nombre = nombre;
        }

        get getNombre(){
           return this.nombre;
        }
    }

    var perro1 = new Perro("toby");
    console.log(perro1.getNombre);
})();