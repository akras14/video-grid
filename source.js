//https://api.gfycat.com/v1test/gfycats/trending?count=9
angular.module('myapp', [])
  .config(function($sceDelegateProvider){
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://*.gfycat.com/**'
      ]);
  })
  .directive('display', function(){
    function controller($scope, $http){
      $http({
        method: 'GET',
        url: 'https://api.gfycat.com/v1test/gfycats/trending',
        params: {
          count: 20
        }
      })
      .then(function(res) {
        console.log(res);
        $scope.videos = res.data.gfycats.map(function(video){
          video.hover = false;
          return video;
        });
      })
      .catch(function(err) {
        console.log(err);
      });
      $scope.hoverOn = function(video){
        video.hover = true;
      };
      $scope.hoverOff = function(video){
        video.hover = false;
      };

    }
    return {
      scope: {},
      transclude: true,
      controller: controller,
      templateUrl: 'display.html'
    };
  })
  .directive('videoContainer', function(){
    return {
      scope: {
        previewUrl: '=',
        mp4Url: '=',
        hover: '='
      },
      transclude: true,
      templateUrl: 'videoContainer.html'
    };
  });
