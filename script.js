window.onload = function() {
    displayNews();
  };

  function searchDetails()
{
    let search=id_search.value;
    console.log(`The search value is: ${search}`);
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=a1fd90dfe8904a53b0028a528e8caba3`)
        .then(res => res.json())
        .then(data => {
            window.location.href = data.articles[0].url;
        });
}

  function displayNews() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a1fd90dfe8904a53b0028a528e8caba3')
      .then(res => res.json())
      .then(data => {
        let articles = data.articles;
        let htmldata = "";
        for (let p of articles) {
          htmldata += `<div class="col-4 mt-3"><div class="card">
          <img src="${p.urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>
            <p class="card-text"><small class="text-muted">${p.publishedAt}</small></p>
          </div>
        </div>
        </div>`
        }
        id_news.innerHTML = htmldata;
      });
  }
  function getSports()
  {
    fetch('https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=a1fd90dfe8904a53b0028a528e8caba3').
    then(res=>res.json()).then(data=>{
        let sp=data.sources
        let htmldata='';
        for (s of sp)
        {
            htmldata+=`
           <div class="col-6 mt-2 ">
           <div class="card text-center border-success">
            <div class="card-body">
              <h5 class="card-title">${s.name}</h5>
              <p class="card-text">${s.description}</p>
              <a href="${s.url}" class="btn btn-primary">View More</a>
            </div>
          </div>
          </div>`
        }
        id_news.innerHTML=htmldata
    })
  }

  function getBusiness()
  {
    fetch('https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=a1fd90dfe8904a53b0028a528e8caba3').
    then(res=>res.json()).then(data=>{
        let sp=data.sources
        let htmldata='';
        for (s of sp)
        {
            htmldata+=`
           <div class="col-6 mt-2 ">
           <div class="card text-center border-success">
            <div class="card-body">
              <h5 class="card-title">${s.name}</h5>
              <p class="card-text">${s.description}</p>
              <a href="${s.url}" class="btn btn-primary">View More</a>
            </div>
          </div>
          </div>`
        }
        id_news.innerHTML=htmldata
    })
  }
  function getEntertainment()
  {
    fetch('https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey=a1fd90dfe8904a53b0028a528e8caba3').
    then(res=>res.json()).then(data=>{
        let sp=data.sources
        let htmldata='';
        for (s of sp)
        {
            htmldata+=`
           <div class="col-6 mt-2 ">
           <div class="card text-center border-success">
            <div class="card-body">
              <h5 class="card-title">${s.name}</h5>
              <p class="card-text">${s.description}</p>
              <a href="${s.url}" class="btn btn-primary">View More</a>
            </div>
          </div>
          </div>`
        }
        id_news.innerHTML=htmldata
    })
  }

  function getHealth()
  {
    fetch('https://newsapi.org/v2/top-headlines/sources?category=health&apiKey=a1fd90dfe8904a53b0028a528e8caba3').
    then(res=>res.json()).then(data=>{
        let sp=data.sources
        let htmldata='';
        for (s of sp)
        {
            htmldata+=`
           <div class="col-6 mt-2 ">
           <div class="card text-center border-success">
            <div class="card-body">
              <h5 class="card-title">${s.name}</h5>
              <p class="card-text">${s.description}</p>
              <a href="${s.url}" class="btn btn-primary">View More</a>
            </div>
          </div>
          </div>`
        }
        id_news.innerHTML=htmldata
    })
  }

  function getScience()
  {
    fetch('https://newsapi.org/v2/top-headlines/sources?category=science&apiKey=a1fd90dfe8904a53b0028a528e8caba3').
    then(res=>res.json()).then(data=>{
        let sp=data.sources
        let htmldata='';
        for (s of sp)
        {
            htmldata+=`
           <div class="col-6 mt-2 ">
           <div class="card text-center border-success">
            <div class="card-body">
              <h5 class="card-title">${s.name}</h5>
              <p class="card-text">${s.description}</p>
              <a href="${s.url}" class="btn btn-primary">View More</a>
            </div>
          </div>
          </div>`
        }
        id_news.innerHTML=htmldata
    })
  }

  function getTechnology()
  {
    fetch('https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey=a1fd90dfe8904a53b0028a528e8caba3').
    then(res=>res.json()).then(data=>{
        let sp=data.sources
        let htmldata='';
        for (s of sp)
        {
            htmldata+=`
           <div class="col-6 mt-2 ">
           <div class="card text-center border-success">
            <div class="card-body">
              <h5 class="card-title">${s.name}</h5>
              <p class="card-text">${s.description}</p>
              <a href="${s.url}" class="btn btn-primary">View More</a>
            </div>
          </div>
          </div>`
        }
        id_news.innerHTML=htmldata
    })
  }