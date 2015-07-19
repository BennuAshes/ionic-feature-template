(function() {
    angular.module('starter.feature.account',[])
        .controller('AccountCtrl', Controller);
        
    Controller.$inject = [];
    
    function Controller() {
        var vm = this;
        vm.settings = {
            enableFriends: true
        };


    }
    
    
})();

