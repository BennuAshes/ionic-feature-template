(function() {
    angular.module('starter.feature.chat',[])
        .controller('ChatCtrl', Controller);
        
    Controller.$inject = ['ChatStore'];
    
    function Controller(ChatStore) {
        var vm = this;
        ChatStore.all().then(function(chatResponse) {
            vm.chats = chatResponse;
            
        });
        vm.remove = function(chat) {
            ChatStore.remove(chat);
        };
    }
    
    
})();

