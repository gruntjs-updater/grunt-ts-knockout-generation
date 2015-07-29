using System.Collections.Generic;

namespace SSI.Domain.ViewModels
{
    public class ContactViewModel
    {
        public int Id { get; set; }
        
        public int TiersId { get; set; }
        
        public EntityItemViewModel Titre { get; set; }
        
        public string Prenom { get; set; }
        
        public string Nom { get; set; }
        
        public bool IsFormateur { get; set; }
        
        public EntityItemViewModel Fonction { get; set; }
        
        public EntityItemViewModel Service { get; set; }
        
        public string Telephone { get; set; }
        
        public string Mobile { get; set; }
        
        public string Email { get; set; }
        
        public string Descriptif { get; set; }

        public bool IsActif { get; set; }

        //public List<EntityItemViewModel> AllTitres { get; set; }
        //public List<EntityItemViewModel> AllFonctions { get; set; }
        //public List<EntityItemViewModel> AllServices { get; set; }
        //public bool IsEditMode { get; set; }

        //[Display(Name = "Nom complet")]
        //public string FullName {
        //    get {
        //        return $"{Prenom} {Nom}";
        //    }
        //}
    }
}
