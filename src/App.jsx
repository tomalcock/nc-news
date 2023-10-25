import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from './components/contexts/UserContext';

import * as Components from './components/index.jsx';

function App() {

const [currentTopic, setTopic] = useState(''); //ignore for now

const { currentUser } = useContext(UserContext);  //ignore for now

  return (
    <div className='App'>
      <Components.HomeButton />
      <Components.NavBar />
    <Routes>
      <Route path="/" element ={<Components.Home />}/>
      <Route path={"/allarticles"} element={<Components.AllArticlesPage />}/>
      <Route path={"/articles/:article_id"} element={<Components.IndividualArticle />} />
      <Route path={"/alltopics"} element={<Components.Topics />}/>
      <Route path={"/topics/:topic"} element={<Components.SingleTopic />}/>

      {/* Ignore below this line for now*/}
      
      <Route path={`/articles/:article_id/comments/comment`} element={<Components.SingleDeleteComment />}/>
      <Route path={`/account/${currentUser}`} element={<Components.AccountPage />}/>
      <Route path={"/login"} element={<Components.LogIn />}/>
    </Routes>
    </div>
  )
}

export default App
