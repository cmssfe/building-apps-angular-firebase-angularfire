angular.module('app').component('nav', {
    templateUrl: '/nav/nav.html',
    controller: function ($firebaseObject, fbRef) {
        var ctrl=this;

        ctrl.loaded=false;

        ctrl.userPreferences = $firebaseObject(fbRef.getPreferencesRef());
        ctrl.userPreferences.$loaded().then(function (data) {
            ctrl.loaded=true;
            debugger;
            ctrl.darkTheme = ctrl.userPreferences.theme === 'dark';
        });

    }
});