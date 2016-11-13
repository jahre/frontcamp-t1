'use strict';
let container = document.getElementById('container');
let news = fetch('https://newsapi.org/v1/articles?source=bbc-news&apiKey=554109c975e14549b32eb8b2f41fe8f8')
  .then(function(response) {
    console.log(response.status);
    return response.json();
   })
  .then(function(response) {
    console.log(response);
    
    // loop to display all articles
    for(let i = 0; i < response.articles.length; i++ ){
      let worldEvent = document.createElement('a');
      worldEvent.className = 'world-news';
      worldEvent.href = response.articles[i].url;
      worldEvent.target = '_blank';
      worldEvent.innerHTML = `
        <span >${response.articles[i].author} / ${response.articles[i].publishedAt}</span> 
        <h1 class="news-title">${response.articles[i].title}</h1>
        <p>${response.articles[i].description}</p>
        <img src="${response.articles[i].urlToImage}" alt="${response.articles[i].title}">
      `;
      container.appendChild(worldEvent);
    };

  })
  .catch( alert );

