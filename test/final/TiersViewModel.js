/// <reference path="knockout.d.ts"/>
var TiersViewModel = (function () {
    function TiersViewModel() {
        this.Id = ko.observable(0);
        this.RaisonSociale = ko.observable("");
        this.TypeTiers = ko.observable(new EntityItemViewModel());
        this.Contacts = ko.observableArray([]);
        this.CodePostal = ko.observable("");
        this.IsApporteur = ko.observable(false);
        this.IsOPCA = ko.observable(false);
        this.Siren = ko.observable("");
        this.Siret = ko.observable("");
        this.Telephone = ko.observable("");
        this.Url = ko.observable("");
        this.Ville = ko.observable("");
        this.Adresses = ko.observableArray([]);
        this.ListOPCA = ko.observableArray([]);
        this.CodeNAF = ko.observable(new EntityItemViewModel());
        this.DelaiReglement = ko.observable(new EntityItemViewModel());
        this.Pays = ko.observable(new EntityItemViewModel());
        this.Descriptif = ko.observable("");
        this.IsActif = ko.observable(false);
        this.IsNouveauClient = ko.observable(false);
        this.ListPostOPCA = ko.observableArray([]);
        this.AllTypeTiers = ko.observableArray([]);
        this.AllPays = ko.observableArray([]);
        this.AllCodeNAF = ko.observableArray([]);
        this.AllDelaiReglement = ko.observableArray([]);
        this.AllTitres = ko.observableArray([]);
        this.AllFonctions = ko.observableArray([]);
        this.AllServices = ko.observableArray([]);
        this.AllOPCA = ko.observableArray([]);
        this.AllTitresAdresse = ko.observableArray([]);
        this.IsEditMode = ko.observable(false);
        this.IsDefaultTiers = ko.observable(false);
    }
    return TiersViewModel;
})();
