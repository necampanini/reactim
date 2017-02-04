using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace ReactFun.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public async Task<JsonResult> GetAllLeaderBoardData()
        {
            var pretendList = new List<LeaderBoardEntry>
            {
                new LeaderBoardEntry {Title = "Resident Evil", VoteCount = 666},
                new LeaderBoardEntry {Title = "DOOM", VoteCount = 9999999999999999999},
                new LeaderBoardEntry {Title = "Lost Ark", VoteCount = 577},
            };

            var obj = new JsonResult
            {
                Data = pretendList.OrderByDescending(entry => entry.VoteCount),
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };

            return obj;
        }
    }

    public class LeaderBoardEntry
    {
        public string Title { get; set; }
        public ulong VoteCount { get; set; }
    }
}