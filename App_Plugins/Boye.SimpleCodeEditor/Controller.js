app.requires.push('ui.codemirror');
angular.module("umbraco").controller("boye.SimpleCodeEditorController", ['$scope', function ($scope) {

    $scope.options = {
        lineNumbers: true,
        lineWrapping: true,
        indentWithTabs: true,
        mode: {
            name: 'htmlmixed',
            scriptTypes: [
              { matches: /\/x-handlebars-template|\/x-mustache/i, mode: null }
            ]
        },
        onLoad: function (_cm) {
            console.log("LOADED!");
            refresh(); //Does not work
        }
    };
    
    function refresh() {
        $('.CodeMirror').each(function (i, el) {
            el.CodeMirror.refresh();
        });
    }
    
    setTimeout(refresh,  10);   // *Slightly* hackish
    setTimeout(refresh, 500);   // That one too
}]);
