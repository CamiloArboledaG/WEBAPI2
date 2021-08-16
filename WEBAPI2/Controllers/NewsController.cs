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
                string url = string.Format("");
                url = string.Format("https://newsapi.org/v2/everything?" + "q=" + "bitcoin" + "&" + "from=2021-08-12&" + "sortBy=popularity&" + "apiKey=e5c6659b74ea4373906d45e7869424e8");
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
                if (keyword == null || keyword.Equals(String.Empty))
                {
                    keyword = "bitcoin";
                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + keyword + "&" + "from=2021-08-12&" + "sortBy=popularity&" + "apiKey=e5c6659b74ea4373906d45e7869424e8");

                }

                else
                {
                    url = string.Format("https://newsapi.org/v2/everything?" + "q=" + keyword + "&" + "from=2021-08-12&" + "sortBy=popularity&" + "apiKey=e5c6659b74ea4373906d45e7869424e8");

                }
                var json = web.DownloadString(url);
                return json;

            }
        }
    }
}
