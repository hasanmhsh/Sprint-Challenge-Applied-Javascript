// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//const articlesTopics = ['javascript','bootstrap','technology','jquery','node'];

const getArticles = async url => {
    try{
        const result = await axios.get(url);
        const articlesTopics = Object.keys(result.data.articles);
        console.log(result);
        articlesTopics.forEach(topic=>{
            result.data.articles[topic].forEach(article=>{
                document.querySelector('.cards-container').appendChild(getArticleCard(article));
            });
        });
    }
    catch(error){
        console.log(error);
    }
};

const getArticleCard = function (article){
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const containerImgDiv = document.createElement('div');
    const containerImg = document.createElement('img');
    const byAuthorSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = article['headline'];
    authorDiv.classList.add('author');
    containerImgDiv.classList.add('img-container');
    containerImg.setAttribute('src',article['authorPhoto']);
    byAuthorSpan.textContent = article['authorName'];

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(containerImgDiv);
    containerImgDiv.appendChild(containerImg);
    authorDiv.appendChild(byAuthorSpan);

    return cardDiv;
}

const articlesUrl = 'https://lambda-times-backend.herokuapp.com/articles';
getArticles(articlesUrl);