
namespace SSI.Domain.ViewModels
{
    public class AdresseViewModel
    {
        public int Id { get; set; }
        public string Adresse1 { get; set; }
        public string Adresse2 { get; set; }
        public string Adresse3 { get; set; }
        public string Adresse4 { get; set; }
        public string CodePostal { get; set; }
        public string Ville { get; set; }
        public EntityItemViewModel Pays { get; set; }
        public string Email { get; set; }
        
        public EntityItemViewModel TitreAdresse { get; set; }
        public bool IsActif { get; set; }

        /*
        *   GET
        */

        //public List<EntityItemViewModel> AllPays { get; set; }
        //public List<EntityItemViewModel> AllTitresAdresse { get; set; }
    }
}
