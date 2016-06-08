angular.module('app').component('login',{
    templateUrl:"/login/login.html",
    bindings:{
        currentAuth:'='
    },
    controller:function(auth,$location){
    
        var ctrl=this;
        ctrl.loggedIn=!!ctrl.currentAuth;

        ctrl.anonLogin=function(){
            auth.$authAnonymously()
            .then(function(){
                $location.path('/home');
            })
            .catch(function(error){
                ctrl.errorMessage=error.code;
            });
        };

        ctrl.fbLogin=function(){
            auth.$authWithOAuthPopup('facebook')
            .then(function(){
                $location.path('/home');
            })
            .catch(function(error){
                ctrl.errorMessage=error.code;
            });
        }


    }
});