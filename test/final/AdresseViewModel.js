/// <reference path="knockout.d.ts"/>
var AdresseViewModel = (function () {
    function AdresseViewModel() {
        this.Id = ko.observable(0);
        this.CodePostal = ko.observable("");
        this.Ville = ko.observable("");
        this.Pays = ko.observable(new EntityItemViewModel());
        this.Email = ko.observable("");
        this.TitreAdresse = ko.observable(new EntityItemViewModel());
        this.IsActif = ko.observable(false);
        this.AllPays = ko.observableArray([]);
        this.AllTitresAdresse = ko.observableArray([]);
    }
    return AdresseViewModel;
})();
