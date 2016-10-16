angular.module('starter.services', [])
.service('News', function($q,$http) {
	return {
		getDatas:function(Type){
			 console.log(">>>>>>>>>>>>.........")
          var deferred = $q.defer();//声明延后执行，表示要去监控后面的执行；
          $http({mehtod:"GET",url:"http://1.yyydataapi.applinzi.com/"+Type+".php"})
          .success(function(data,status,headers,config){
               pos = data.indexOf('<script type="text/javascript">');//后缀由script标签开始，新浪云没实名认证带来的问题
               dataStr = data.substring(0,pos);//字符串切割去掉后缀
               dataStrs = eval("("+dataStr+")")
               console.log(dataStrs.result);
               Datas = dataStrs.result;//将字符串转化成对象，方便调用
               deferred.resolve(Datas);//声明执行成功，即http请求数据成功，
          })
          .error(function(data,status,headers,config){
            deferred.reject(data);//声明执行失败，服务器返回错误
          });
          return deferred.promise;

     },
      getId: function(listId) {
         console.log(".............<<<<<<<<<,,")
              console.log(Datas.list);
              for (var i = 0; i < Datas.list.length; i++) {
                  console.log(Datas.list[i].$$hashKey);
                  console.log(listId);
                    if(Datas.list[i].$$hashKey === listId) {
                      console.log(Datas.list[i]);
                      return Datas.list[i];
                    }
              }
              console.log("nullnullnull........")
              return null;
      }//getId结束

	}//return 结束
})
