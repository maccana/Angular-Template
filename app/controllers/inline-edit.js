'use strict';

/* Inline Editing Ctrl */

templates.controller('inlineEditCtrl', function($scope) {

 $scope.films = [{
        title: "item #1",
        editing: false
    }, {
     	title: "item #1",
        editing: false
    }, {
        title: "item #1",
        editing: false
    }];
    $scope.editFilm = function (film) {
        film.editing = true;
    }

    $scope.doneEditing = function (film) {
        film.editing = true;
        //dong some background ajax calling for persistence...
    }
})
