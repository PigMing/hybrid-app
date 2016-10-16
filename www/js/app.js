  

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // .state('app.top', {
  //   url: '/top',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/top.html',
  //     }
  //   }
  // })

  .state('app.shouye', {
    url: '/shouye',
    views: {
      'menuContent': {
        templateUrl: 'templates/shouye.html',
        controller:'ShouyeCtrl'
      }
    }
  })

    //列表
    .state('app.lists', {
      url: '/lists',
      views: {
        'menuContent': {
          templateUrl: 'templates/lists.html',
          controller: 'ListsCtrl'
        }
      }
    })

    //列表详情
  .state('app.detail', {
    url: '/lists/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/shouye');
});





// $appkey = 'your_appkey_here';//你的appkey
// $channel='头条';//utf8 新闻频道(头条,财经,体育,娱乐,军事,教育,科技,NBA,股票,星座,女性,健康,育儿)
// $url = "http://api.jisuapi.com/news/get?channel=$channel&appkey=$appkey";
// $result = curlOpen($url);