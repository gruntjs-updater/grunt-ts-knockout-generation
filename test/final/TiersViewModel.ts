/// <reference path="knockout.d.ts"/>
class TiersViewModel
{
    public Id: KnockoutObservable<number>;
    public RaisonSociale: KnockoutObservable<string>;
    public TypeTiers: KnockoutObservable<EntityItemViewModel>;
    public Contacts: KnockoutObservableArray<ContactViewModel>;
    public CodePostal: KnockoutObservable<string>;
    public IsApporteur: KnockoutObservable<boolean>;
    public IsOPCA: KnockoutObservable<boolean>;
    public Siren: KnockoutObservable<string>;
    public Siret: KnockoutObservable<string>;
    public Telephone: KnockoutObservable<string>;
    public Url: KnockoutObservable<string>;
    public Ville: KnockoutObservable<string>;
    public Adresses: KnockoutObservableArray<AdresseViewModel>;
    public ListOPCA: KnockoutObservableArray<TiersViewModel>;
    public CodeNAF: KnockoutObservable<EntityItemViewModel>;
    public DelaiReglement: KnockoutObservable<EntityItemViewModel>;
    public Pays: KnockoutObservable<EntityItemViewModel>;
    public Descriptif: KnockoutObservable<string>;
    public IsActif: KnockoutObservable<boolean>;
    public IsNouveauClient: KnockoutObservable<boolean>;
    public ListPostOPCA: KnockoutObservableArray<number>;
    public AllTypeTiers: KnockoutObservableArray<EntityItemViewModel>;
    public AllPays: KnockoutObservableArray<EntityItemViewModel>;
    public AllCodeNAF: KnockoutObservableArray<EntityItemViewModel>;
    public AllDelaiReglement: KnockoutObservableArray<EntityItemViewModel>;
    public AllTitres: KnockoutObservableArray<EntityItemViewModel>;
    public AllFonctions: KnockoutObservableArray<EntityItemViewModel>;
    public AllServices: KnockoutObservableArray<EntityItemViewModel>;
    public AllOPCA: KnockoutObservableArray<TiersViewModel>;
    public AllTitresAdresse: KnockoutObservableArray<EntityItemViewModel>;
    public IsEditMode: KnockoutObservable<boolean>;
    public IsDefaultTiers: KnockoutObservable<boolean>;

    constructor(){
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
}
