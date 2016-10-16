angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

//首页,初始化调用函数
// .controller('ShouyeCtrl', function($scope,News) {
//         //页面加载完成直接调用函数，不通过ng-click
//         $scope.getlist = function(Type){
//             console.log(111);
//             $scope.listTitle = Type;
//             var xx = News.getDatas(Type);
//             // console.log(xx);
//             console.log(Datas) ;
//             $scope.lists = Datas;
//         }
//  })


.controller('AppCtrl', function($scope,News,$stateParams) {
        //所有的列表除了数据其他都一样，同一个controller传不同的参数
        $scope.getlist = function(Type){
            console.log(111);
            $scope.listTitle = Type;
            var promise = News.getDatas(Type);//同步调用，获得承诺接口
                promise.then(function(data){//调用承诺接口api获取数据。resolve     
                  console.log(Datas);
                  $scope.lists = Datas.list;
                  console.log($scope.lists)
                  $scope.listTitle = Datas.channel;
                  // console.log($scope.playlists);
                },function(data){
                  alert("error")
                })
        }
 })
//时尚
.controller('ListsCtrl', function($scope,News) {
      // $scope.getDetail = function(par){
      //      console.log("dddddddddddd.............")
      //      var Detail = News.getId(par);
      //      console.log(Detail);
      // }

 })

.controller('ShouyeCtrl',function($scope){
       $scope.options = {
            autoplay:true,
            loop: false,
            effect: 'fade',
            speed: 4000,
          }
})



.controller('DetailCtrl', function($scope,News,$stateParams) {
    console.log($stateParams.listId);
    $scope.detail = News.getId($stateParams.listId);
    console.log($scope.detail);
      
});


// //轮播
// var mySwiper = new Swiper('.swiper-container',{
//     autoplay: 5000,
//     pagination : '.swiper-pagination'
// })