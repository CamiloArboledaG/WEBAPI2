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
    public class WeatherController : ControllerBase
    {

        [HttpGet]
        
        public string Get(string ciudad)
        {
            using(WebClient web=new WebClient())
            {
                string url = string.Format("");
                if (ciudad == null || ciudad.Equals(String.Empty))
                {
                    ciudad = "cali";
                    url = string.Format("http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=d2e612eb36729d83d1dd24b0a4be17d2");

                }

                else
                {
                    url = string.Format("http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=d2e612eb36729d83d1dd24b0a4be17d2");

                }
                var json = web.DownloadString(url);
                return json;

            }
            



            //string url = @"api.openweathermap.org/data/2.5/weather?q=california&appid=d2e612eb36729d83d1dd24b0a4be17d2";
            //WebRequest webRequest = WebRequest.Create(url);
            //HttpWebRequest httpwebRequest = null;
            //httpwebRequest = (HttpWebRequest)webRequest.GetResponse();
        }
    }
}
