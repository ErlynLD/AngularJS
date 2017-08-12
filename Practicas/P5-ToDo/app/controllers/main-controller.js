(
    function(){
        "use strict"

        angular.module("PrimApp")
               .controller("PrimController", controller);

        function controller(){
            //Virtual model
            var vm = this;

            //Nuestra variable tarea que conecta HTML con AngularJS
            vm.tarea = "";
            
            //Nuestro arreglo de tareas
            vm.tareas = [];

            // Número de tareas del arreglo anterior
            vm.numeroTareas = 0

            //Función para agregar nueva tarea al arreglo
            vm.agregarTarea = function(){
                if(vm.tarea.length > 0){
                    vm.tareas.push(vm.tarea);
                    vm.numeroTareas = vm.tareas.length;
                    vm.tarea = "";
                }
            }

            vm.eliminarTarea = function(indice){
                if($index >= 0){
                    vm.tareas.splice(indice, 1);
                    //alert(indice);
                }
            }
        }
    }
)();