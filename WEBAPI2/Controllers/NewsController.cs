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

        public string Get(string keyword)
        {
            using (WebClient web = new WebClient())
            {
                string url = string.Format("");
                if (keyword == null || keyword.Equals(String.Empty))
                {
                    keyword = "bogota";
                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + keyword + "&" + "from=2021-08-12&" + "sortBy=popularity&" + "apiKey=6363f918e6b14682b34d195e123da61a");

                }

                else
                {
                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + keyword + "&" + "from=2021-08-12&" + "sortBy=popularity&" + "apiKey=6363f918e6b14682b34d195e123da61a");

                }
                var json = web.DownloadString(url);
                return json;

            }
        }
    }
}
