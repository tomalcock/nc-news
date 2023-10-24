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