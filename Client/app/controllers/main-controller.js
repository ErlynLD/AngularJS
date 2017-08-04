(function(){
    'uses strict'

angular
     .module("MyApp")
     .controller('mainController',controller);

     function controller($scope){
       $scope.mensaje = "hola mundo.";
       var vm = this;
       vm.texto = "desde el Desde el padre";
       vm.label = "Esto es un gran mensaje!!";

     }



})();