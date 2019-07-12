using Microsoft.EntityFrameworkCore;


namespace parcialnetcore.models
{
    public class librosContext : DbContext
    {
        public librosContext(DbContextOptions<librosContext> options) :
        base(options){}

        public DbSet<LibrosItem> taskItem{get; set;}
    }



    
}