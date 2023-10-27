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
  console.log(article_id)
  console.log(inputComment)
  console.log(currentUser)
  return axios
  .post(`https://nc-news-backend-project-ohqj.onrender.com/api/articles/${article_id}/comments`, {
    username : currentUser,
    body : inputComment
  })
  .then(({ data }) => {
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
  .get(`https://nc-news-backend-project-ohqj.onrender.com/api/articles?sort_by=${sortBy}&direction=${orderBy}`)
  .then(({ data }) => {
    return data;
  })
}

export function deleteComment(comment_id) {
  return axios
  .delete(`https://nc-news-backend-project-ohqj.onrender.com/api/comments/${comment_id}`)
  .then(() => {
    return 'deleted';
  })
  .catch((err) => {
    console.log(err)
  })
}

export function getUser(username) {
  return axios
  .get(`https://nc-news-backend-project-ohqj.onrender.com/api/users/${username}`)
  .then((response) => {
    console.log(response)
  })
}

