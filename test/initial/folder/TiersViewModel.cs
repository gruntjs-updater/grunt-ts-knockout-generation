using System.Collections.Generic;

namespace SSI.Domain.ViewModels
{
    public class TiersViewModel
    {
        public int Id { get; set; }
        
        public string RaisonSociale { get; set; }
        
        public EntityItemViewModel TypeTiers { get; set; }
        
        public List<ContactViewModel> Contacts { get; set; }
        
        public string Adresse1 { get; set; }
        
        public string Adresse2 { get; set; }
        
        public string Adresse3 { get; set; }
        
        public string CodePostal { get; set; }
        
        public bool IsApporteur { get; set; }
        
        public bool IsOPCA { get; set; }
        
        public string Siren { get; set; }
        
        public string Siret { get; set; }
        
        public string Telephone { get; set; }
        
        public string Url { get; set; }
        
        public string Ville { get; set; }
        
        public List<AdresseViewModel> Adresses { get; set; }
        
        public List<TiersViewModel> ListOPCA { get; set; }
        
        public EntityItemViewModel CodeNAF { get; set; }
        
        public EntityItemViewModel DelaiReglement { get; set; }
        
        public EntityItemViewModel Pays { get; set; }
        
        public string Descriptif { get; set; }
        public bool IsActif { get; set; }
        
        public bool IsNouveauClient { get; set; }
        /*
            POST
        */

        /*
            Cette liste est utilsé lorsqu'on POST un TiersViewModel pour création ou édition d'un tiers
            Pour POSTé la liste des OPCA, on post uniquement les Id et pas tout l'objet
            Cela évite les vérifications du ModelState concernant les objets TiersViewModel caractérisant chaque OPCA
        */

        //public List<int> ListPostOPCA { get; set; }

        ///*
        //    GET
        //*/

        //public List<EntityItemViewModel> AllTypeTiers { get; set; }
        //public List<EntityItemViewModel> AllPays { get; set; }
        //public List<EntityItemViewModel> AllCodeNAF { get; set; }
        //public List<EntityItemViewModel> AllDelaiReglement { get; set; }
        //public List<EntityItemViewModel> AllTitres { get; set; }
        //public List<EntityItemViewModel> AllFonctions { get; set; }
        //public List<EntityItemViewModel> AllServices { get; set; }
        //public List<TiersViewModel> AllOPCA { get; set; }
        //public List<EntityItemViewModel> AllTitresAdresse { get; set; }
        //public bool IsEditMode { get; set; }
        //public bool IsDefaultTiers { get; set; }

        //public string FullLibelleOPCA {
        //    get
        //    {
        //        return $"{RaisonSociale} - {Adresse1}";
        //    }
        //}

        //public string FullLibelle
        //{
        //    get
        //    {
        //        return $"{this.Id} {this.RaisonSociale}";
        //    }
        //}

    }
}