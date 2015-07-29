/// <reference path="knockout.d.ts"/>
var EntityItemViewModel = (function () {
    function EntityItemViewModel() {
        this.Id = ko.observable(0);
        this.Valeur = ko.observable("");
    }
    return EntityItemViewModel;
})();
