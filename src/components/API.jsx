import axios from "axios";

export function getAllArticles() {
  return axios
    .get("https://nc-news-backend-project-ohqj.onrender.com/api/articles")
    .then(({ data }) => {
      return data;
    });
}

export function getSingleArticle(currentArticle) {
  return axios
  .get(`https://nc-news-backend-project-ohqj.onrender.com/api/articles/${currentArticle}`)
  .then(({ data }) => {
    return data;
  })
}

export function getComments(article_id) {
  return axios
  .get(`https://nc-news-backend-project-ohqj.onrender.com/api/articles/${article_id}/comments`)
  .then(({data}) => {
    return data;
  })
}

export function patchVote(article_id,newVotes) {
  
  return axios
  .patch(`https://nc-news-backend-project-ohqj.onrender.com/api/articles/${article_id}`, {
    'inc_votes' : newVotes
  })
  .then(({ data }) => {
    return data;
  })
}

export function postComment(article_id,inputComment,currentUser) {
  return axios
  .post(`https://nc-news-backend-project-ohqj.onrender.com/api/articles/${article_id}/comments`, {
    username : currentUser,
    body : inputComment
  })
  .then(({ data }) => {
    console.log(data)
    return data;
  })
}

export function getArticlesByTopic(topic) {
  return axios
  .get(`https://nc-news-backend-project-ohqj.onrender.com/api/articles?topic=${topic}`)
  .then (({ data }) => {
    return data;
  })
}

export function getArticlesUsingQuery(sortBy,orderBy) {
  return axios
  .get(`https://nc-news-backend-project-ohqj.onrender.com/api/articles?sortby=${sortBy}&direction=${orderBy}`)
  .then(({ data }) => {
    console.log(data)
  })
}

