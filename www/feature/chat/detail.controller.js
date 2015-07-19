(function() {
    angular.module('starter.feature.detail',[])
        .controller('ChatDetailCtrl', Controller);
        
    Controller.$inject = ['ChatStore','chatId'];
    
    function Controller(ChatStore,chatId) {
        var vm = this;
        // can also do this in the resolve but it will
        // cause a delay, which will be especially bad on mobile
        console.log('chat id - ', chatId);
        ChatStore.get(chatId).then(function(data) {
            vm.chat = data;
            console.log('chat found: ', vm.chat);
        });
    }
    
    
})();