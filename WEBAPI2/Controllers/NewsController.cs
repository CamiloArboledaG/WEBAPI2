using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;


namespace WEBAPI2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        [HttpGet]

        public string Get()
        {
            using (WebClient web = new WebClient())
            {
                string keyword = "";
                string Date = DateTime.Now.ToString("dd-MM-yyyy");
                string url = string.Format("");
                if (keyword == null || keyword.Equals(String.Empty))
                {
                    keyword = "bitcoin";
                    url = string.Format("https://newsapi.org/v2/everything?q=" + keyword + "&" + "from="+Date + "sortBy=popularity&apiKey=9d9460ca09a54fa9a24c58ecd3e50e3a");

                }

                else
                {

                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + "bitcoin" + "&" + "from=" + Date + "sortBy=popularity&" + "apiKey=9d9460ca09a54fa9a24c58ecd3e50e3a");
                    

                }
                var json = web.DownloadString(url);
                return json;

            }
        }


        [HttpGet("{keyword}")]

        public string Get(string keyword)
        {
            using (WebClient web = new WebClient())
            {
                string url = string.Format("");
                string Date = DateTime.Now.ToString("dd-MM-yyyy");
                url = string.Format("https://newsapi.org/v2/everything?q=" + keyword + "&" + "from=" + Date + "sortBy=popularity&apiKey=9d9460ca09a54fa9a24c58ecd3e50e3a");
                var json = web.DownloadString(url);
                if (json.Length > 200)
                {

                    return json;

                }
                else
                {
                    keyword = "bitcoin";
                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + keyword + "&" + "from=" + Date + "sortBy=popularity&" + "apiKey=9d9460ca09a54fa9a24c58ecd3e50e3a");
                    var json1 = web.DownloadString(url);
                    return json1;
                }
                

                ;

            }
        }
    }
}
