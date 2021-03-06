(function() {
    angular.module('starter.store.chat',[])
    .factory('ChatStore', Factory);
    
    Factory.$inject = ['$q'];
    
    function Factory($q) {
        
        var service = {
            all: all,
            remove: remove,
            get: get
        };
        
        
        function get(chatId) {
            var deferred = $q.defer();
            var foundChat = null;
            // Might use a resource here that returns a JSON array
            // Can also cache the data and handle errors at an upper level using promises. $http returns one by default
            // but also check out $q
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                  foundChat = chats[i];
                  break;
                }
            }
            
            if(foundChat == null) {
                deferred.resolve([]);
            }else {
                deferred.resolve(foundChat);
            }
            
            return deferred.promise;
        }

        
        function all() {
            var deferred = $q.defer();
            
            deferred.resolve(chats);
            
            return deferred.promise;
        }
        
        function remove(chat) {
            chats.splice(chats.indexOf(chat), 1);
        }
        
        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
        }];

        return service;
    }
})();