(function(){
    angular.module('starter')

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'feature/core/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'feature/dash/dash.html',
            controller: 'DashCtrl as vm'
          }
        }
      })

      .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'feature/chat/chat.html',
              controller: 'ChatCtrl as vm'
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'feature/chat/detail.html',
              controller: 'ChatDetailCtrl as vm'
            }
          },
          resolve: {
              chatId: ['$stateParams',function($stateParams) {
                  return $stateParams.chatId;
              }]
          }
        })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'feature/account/account.html',
            controller: 'AccountCtrl as vm'
          }
        }
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/dash');
        $urlRouterProvider.when('/tab/chats/','/tab/chats');
    }]);
    
})();