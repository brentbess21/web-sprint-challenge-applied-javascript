import axios from "axios";

const Card = (article) => {

  //create elements
  const cardContainer = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const authorName = document.createElement("span");

  //create structure
  cardContainer.appendChild(headline);
  cardContainer.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(cardImg);

  //add attributes
  cardContainer.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  cardImg.src = article.authorPhoto;

  //pass in content 
  headline.textContent = article.headline;
  authorName.textContent = article.authorName; 

  //add functionality 
  cardContainer.addEventListener("click", event=>{
    console.log(article.headline);
  })

  return cardContainer;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
    .then(response =>{
      const entryPoint = document.querySelector(selector);

      const jsArticles = response.data.articles.javascript;
      const bootstrapArticles = response.data.articles.bootstrap;
      const techArticles = response.data.articles.technology;
      const jqueryArticles = response.data.articles.jquery;
      const nodeArticles = response.data.articles.node;

      const topicArray = [jsArticles, bootstrapArticles, techArticles, jqueryArticles, nodeArticles];


      topicArray.forEach(topic =>{
        topic.forEach(article => {
          entryPoint.appendChild(Card(article));
        })
      })
    })
    .catch(err =>{
      console.error(err)
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}


export { Card, cardAppender }
