/// <reference path="knockout.d.ts"/>
class ContactViewModel
{
    public Id: KnockoutObservable<number>;
    public TiersId: KnockoutObservable<number>;
    public Titre: KnockoutObservable<EntityItemViewModel>;
    public Prenom: KnockoutObservable<string>;
    public Nom: KnockoutObservable<string>;
    public IsFormateur: KnockoutObservable<boolean>;
    public Fonction: KnockoutObservable<EntityItemViewModel>;
    public Service: KnockoutObservable<EntityItemViewModel>;
    public Telephone: KnockoutObservable<string>;
    public Mobile: KnockoutObservable<string>;
    public Email: KnockoutObservable<string>;
    public Descriptif: KnockoutObservable<string>;
    public IsActif: KnockoutObservable<boolean>;
    public AllTitres: KnockoutObservableArray<EntityItemViewModel>;
    public AllFonctions: KnockoutObservableArray<EntityItemViewModel>;
    public AllServices: KnockoutObservableArray<EntityItemViewModel>;
    public IsEditMode: KnockoutObservable<boolean>;

    constructor(){
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
}
