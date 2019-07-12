using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using parcialnetcore.models;

namespace parcialnetcore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class libroController : ControllerBase
    {
        private readonly librosContext _context;

        public libroController(librosContext context)
        {
            _context = context;

            if (_context.taskItem.Count() == 0)
            {
                _context.taskItem.Add(new LibrosItem { ISBN = 1, Titulo = "lady vende", PrecioVenta = "4000", Popular = true });
                _context.taskItem.Add(new LibrosItem { ISBN = 2, Titulo = "lady ", PrecioVenta = "5000", Popular = false });
                _context.SaveChanges();
            }
        }

        


        [HttpPost]
        public async Task<ActionResult<LibrosItem>> postLibrosItem(LibrosItem item)
        {
            _context.taskItem.Add(item);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetLibrosItem), new { ISBN = item.ISBN }, item);
        }

        [HttpPut("{ISBN}")]
        public async Task<IActionResult> PutLibrosItem(int ISBN, LibrosItem item)
        {
            if (ISBN != item.ISBN)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LibrosItem>>> GetLibrosItem()
        {
            return await _context.taskItem.ToListAsync();
        }



        [HttpGet ("{ISBN}")]
        public async Task<ActionResult<LibrosItem>> GetLibrosItem(int ISBN)
        {
            var taskItem = await _context.taskItem.FindAsync(ISBN); 

            if (taskItem == null)
            {
                return NotFound();
             }
            return taskItem;
            
        }

        [HttpDelete("{ISBN}")]
        public async Task<IActionResult> DeleteLibrosItem(int ISBN)
        {
            var taskItem = await _context.taskItem.FindAsync(ISBN);
            if (taskItem == null)
            {
                return NotFound();
            }
            _context.taskItem.Remove(taskItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}