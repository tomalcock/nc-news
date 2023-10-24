import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from './components/contexts/UserContext';
import AccountPage from './components/AccountPage';
import AddComment from './components/AddComment';
import CommentsPage from './components/CommentsPage';
import Home from './components/Home';
import HomeButton from './components/HomeButton';
import NavBar from './components/NavBar';
import IndividualArticle from './components/IndividualArticle';
import SingleTopic from './components/SingleTopic';
import SingleDeleteComment from './components/SingleDeleteComment';
import Topics from './components/Topics';
import AllArticlesPage from './components/AllArticlesPage';
import LogIn from './components/LogIn';

function App() {

const [currentTopic, setTopic] = useState('');

const { currentUser } = useContext(UserContext);  //ignore for now

  return (
    <div className='App'>
      <HomeButton />
      <NavBar />
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path={"/articles/:article_id"} element={<IndividualArticle />} />
      <Route path={"/allarticles"} element={<AllArticlesPage />}/>
      {/* ignore routes below this line for now. Just testing out all of the roots to begin with */}
      <Route path={`/articles/:article_id/comments`} element={<CommentsPage />}/>
      <Route path={`/articles/:article_id/comments/add`} element={<AddComment />}/>
      <Route path={`/topics/${currentTopic}`} element={<SingleTopic />}/>
      <Route path={`/articles/:article_id/comments/comment`} element={<SingleDeleteComment />}/>
      <Route path={`/account/${currentUser}`} element={<AccountPage />}/>
      <Route path={"/topics"} element={<Topics />}/>
      <Route path={"/login"} element={<LogIn />}/>
    </Routes>
    </div>
  )
}

export default App
