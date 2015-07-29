/// <reference path="knockout.d.ts"/>
class AdresseViewModel
{
    public Id: KnockoutObservable<number>;
    public CodePostal: KnockoutObservable<string>;
    public Ville: KnockoutObservable<string>;
    public Pays: KnockoutObservable<EntityItemViewModel>;
    public Email: KnockoutObservable<string>;
    public TitreAdresse: KnockoutObservable<EntityItemViewModel>;
    public IsActif: KnockoutObservable<boolean>;
    public AllPays: KnockoutObservableArray<EntityItemViewModel>;
    public AllTitresAdresse: KnockoutObservableArray<EntityItemViewModel>;

    constructor(){
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
}
