/// <reference path="knockout.d.ts"/>
class EntityItemViewModel
{
    public Id: KnockoutObservable<number>;
    public Valeur: KnockoutObservable<string>;

    constructor(){
        this.Id = ko.observable(0);
        this.Valeur = ko.observable("");
    }
}
