import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './components/contexts/UserContext';

import * as Components from './components/index.jsx';

function App() {

const { currentUser } = useContext(UserContext);

  return (
    <div className='App'>
      <Components.HomeButton />
        {currentUser && <p>Signed in as {currentUser}</p>}
      <Components.NavBar />
    <Routes>
      <Route path="/" element ={<Components.Home />}/>
      <Route path={"/allarticles"} element={<Components.AllArticlesPage />}/>
      <Route path={"/articles/:article_id"} element={<Components.IndividualArticle />} />
      <Route path={"/alltopics"} element={<Components.Topics />}/>
      <Route path={"/topics/:topic"} element={<Components.SingleTopic />}/>
      <Route path={"/signin"} element={<Components.SignIn />}/>
      <Route path={`/account/:username`} element={<Components.AccountPage />}/>
      <Route path={"/*"} element={<Components.ErrorPage />}/>
    </Routes>
    </div>
  )
}

export default App
