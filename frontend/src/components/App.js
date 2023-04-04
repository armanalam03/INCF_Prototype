import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";
import './styles/App.css';
import NotePage from './NotePage';
import Notes from './Notes';
import Signin from './Signin';
import Signup from './Signup'
import SubmitArticle from './SubmitArticle';
import Home from './Home';
import ArticleForum from './ArticleForum';

export default function App() {
  
  const [title, setTitle] = useState("")
  const [authors, setAuthors] = useState([])
  const [abstract, setAbstract] = useState("")
  const [keywords, setKeywords] = useState([])
  const [pdf, setPdf] = useState("")

  const onNoteSelect = (title, authors, abstract, keywords, pdf) => {
    setTitle(title)
    setAuthors(authors)
    setAbstract(abstract)
    setKeywords(keywords)
    setPdf(pdf) 

    /* console.log("title: " + title)
    console.log("authors: " + authors)
    console.log("abstract: " + abstract)
    console.log("keywords: " + keywords)
    console.log("pdf: " + pdf) */
  }

  return (
    <>
      <div className="App">
        <div className="navbar">
          <span className="logo">SciCommons</span>
          <div className="account">
              <span className="account-name">qwerty123</span>
          </div>
        </div>

        <Routes>
            <Route path='/' element={<Signin />} exact />
            <Route path='/signup' element={<Signup />} exact />
            <Route path='/home' element={<Home onNoteSelect={onNoteSelect}/>} exact />
            <Route path='/notePage' element={<NotePage title={title} authors={authors} abstract={abstract} keywords={keywords} pdf={pdf}/>} exact />
            <Route path='/forum' element={<ArticleForum />} exact />
        </Routes>
      </div>
    
      
    </>
  );
}
