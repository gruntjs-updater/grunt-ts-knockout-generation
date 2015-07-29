/// <reference path="knockout.d.ts"/>
var ContactViewModel = (function () {
    function ContactViewModel() {
        this.Id = ko.observable(0);
        this.TiersId = ko.observable(0);
        this.Titre = ko.observable(new EntityItemViewModel());
        this.Prenom = ko.observable("");
        this.Nom = ko.observable("");
        this.IsFormateur = ko.observable(false);
        this.Fonction = ko.observable(new EntityItemViewModel());
        this.Service = ko.observable(new EntityItemViewModel());
        this.Telephone = ko.observable("");
        this.Mobile = ko.observable("");
        this.Email = ko.observable("");
        this.Descriptif = ko.observable("");
        this.IsActif = ko.observable(false);
        this.AllTitres = ko.observableArray([]);
        this.AllFonctions = ko.observableArray([]);
        this.AllServices = ko.observableArray([]);
        this.IsEditMode = ko.observable(false);
    }
    return ContactViewModel;
})();
