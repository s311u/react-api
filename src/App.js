import { useEffect, useState } from 'react';
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import NotFound from './components/NotFound.js';
import Footer from './components/Footer.js';
import Characters from './components/Characters.js';
import RandomQuote from './components/RandomQuote.js';

function App(){

 /*  const [char, setChar] = useState(0);
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const login = {
      'Accept': 'application/json',
      'Authorization': 'Bearer Br1a0Wv6fVW0Rq9xDuiM'
    }
    const getQuote = async () => {
      const apiQuote = await fetch('https://the-one-api.dev/v2/quote', {
        headers: login
      })
      const quotes = await apiQuote.json();
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(quote.dialog);
      const apiChar = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers : login })
      const chars = await apiChar.json();
      const char = chars.docs[0];
      setChar(char.name)
    };
    getQuote();
  }, []);
 */
  return (
    <>
      <Navbar/>
      <Header/> 
      <div className = 'container' >
        <Routes>
          <Route path = "/" element = {<RandomQuote/>}/>
          <Route path="/aboutus" component={() => { 
            window.location.href = 'https://s311u.github.io/SK_resume/html/contact.html'; 
            return null;
            }}/>
          <Route path = "/characters" element = {<Characters/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </div>
      <Footer/> 
    </>
  )}

export default App;
