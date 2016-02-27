//https://api.gfycat.com/v1test/gfycats/trending?count=9
angular.module('myapp', [])
  .directive('display', function(){
    function controller($scope, $http){
      $http({
        method: 'GET',
        url: 'https://api.gfycat.com/v1test/gfycats/trending',
        params: {
          count: 8
        }
      })
      .then(function(res) {
        console.log(res);
        $scope.videos = res.data.gfycats;
      })
      .catch(function(err) {
        console.log(err);
      });
    }
    return {
      scope: {},
      transclude: true,
      controller: controller,
      templateUrl: 'display.html'
    };
  })
  .directive('videoContainer', function(){
    function controller($scope){
      $scope.hover = false;
    }
    return {
      scope: {
        previewUrl: '=',
        mp4Url: '='
      },
      transclude: true,
      templateUrl: 'videoContainer.html',
      controller: controller
    };
  });
