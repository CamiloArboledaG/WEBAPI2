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
                    url = string.Format("https://newsapi.org/v2/everything?q=" + keyword + "&" + "from="+Date + "sortBy=popularity&apiKey=e963222d922546a0ae58cc7b81cb720d");

                }

                else
                {

                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + "bitcoin" + "&" + "from=" + Date + "sortBy=popularity&" + "apiKey=e963222d922546a0ae58cc7b81cb720d");
                    

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
                url = string.Format("https://newsapi.org/v2/everything?q=" + keyword + "&" + "from=" + Date + "sortBy=popularity&apiKey=e963222d922546a0ae58cc7b81cb720d");
                var json = web.DownloadString(url);
                if (json.Length > 200)
                {

                    return json;

                }
                else
                {
                    keyword = "bitcoin";
                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + keyword + "&" + "from=" + Date + "sortBy=popularity&" + "apiKey=e963222d922546a0ae58cc7b81cb720d");
                    var json1 = web.DownloadString(url);
                    return json1;
                }
                

                ;

            }
        }
    }
}
