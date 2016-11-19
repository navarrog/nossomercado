(function(){

var nossoMercado = angular.module('nossoMercado', ['ngRoute']);

nossoMercado.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/bem-vindo.html',
    controller: 'productListController'
  })

  .when('/lista', {
    templateUrl: 'pages/lista.html',
    controller: 'productListController'
  })

  .when('/dados', {
    templateUrl: 'pages/dados.html',
    controller: 'productListController'
  })

  .when('/carrinho', {
    templateUrl: 'pages/carrinho.html',
    controller: 'productListController'
  })

});

nossoMercado.controller('productListController', ['$scope', '$http', '$routeParams', '$location', '$rootScope',
function($scope, $http, $routeParams, $location, $rootScope) {

  $http.get('json')
      .success(function (result) {
        $scope.products = result;
      })
      .error(function (data, status) {
        console.log(data);
      })

  // $scope.products = [
  //   {
  //     "name": "Arroz Yoki",
  //     "description": "Tipo 1 - 5kg",
  //     "price": 12.90,
  //     "image": "http://mercadoemcasa.loja2.com.br/img/f3492826798f2d13e43662691f3b877e.jpg",
  //     "buying": 0
  //   },
  //   {
  //     "name": "Arroz Namorado",
  //     "description": "Tipo 1 - 5kg",
  //     "price": 13.50,
  //     "image": "http://d2fvaoynuecth8.cloudfront.net/assets/39518/produtos/134309/desodorantes-axesecopulse.jpg",
  //     "buying": 0
  //   }
  // ];

  $scope.saveInfo = function() {
    var userInfo = {
      'name': $scope.userInfo.name,
      'phone': $scope.userInfo.phone,
      'whatsApp': $scope.userInfo.whatsApp,
      'aptNum': $scope.userInfo.aptNum
    }
    localStorage.setItem('userInfo', angular.toJson(userInfo));
  };

  $scope.$watch('saveInfo', function() {
    $scope.userInfo = angular.fromJson(localStorage.getItem('userInfo'));
  });

  $scope.$watch('products', function() {
    if(sessionStorage.products == "undefined" || sessionStorage.products == undefined) {
      sessionStorage.products = angular.toJson($scope.products);
    } else {
      $rootScope.productList = angular.fromJson(sessionStorage.products);
    }
  }, true);

  $scope.totalSum = function(){
    var total = 0;
    if ($rootScope.productList) {
      for (var i = 0; i < $rootScope.productList.length; i++) {
         sum = ($rootScope.productList[i].price) * ($rootScope.productList[i].buying);
         total += sum;
       }
    }

    return total;
  }

  $scope.addProduct = function() {
    this.product.buying++;
    $scope.totalSum($rootScope.productList);
    sessionStorage.products = angular.toJson($rootScope.productList);
  }

  $scope.removeProduct = function() {
    if (this.product.buying > 0) {
      this.product.buying--;
      $scope.totalSum($rootScope.productList);
      sessionStorage.products = angular.toJson($rootScope.productList);
    }
  }

  $scope.deliveryDate = function() {
    Date.prototype.getDeliveryDate = function() {
      var d = new Date(this.getTime());
      var diff = d.getDate() - d.getDay() + 3;
      if (d.getDay() == 0)
          diff -= 7;
      diff += 7;
      return new Date(d.setDate(diff));
    };

    var date = new Date();
    $scope.deliveryDate = date.getDeliveryDate();
  }

  $scope.deliveryDate();

  $scope.submitOrder = function() {
    sessionStorage.clear();
  };

}]);

nossoMercado.directive('searchResult', function() {
    return {
      templateUrl: '../templates/searchresult.html',
      replace: true,
      scope: {
        productObject: "=",
        removeProduct: "&",
        addProduct: "&",
        totalSum: "&"
      }
    }
});

})();
