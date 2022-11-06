import React from 'react';
import { useEffect, useState } from 'react';
export default function Home () {
const [char, setChar] = useState(0);
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
      setChar(char.name);
     let vari = "Boromir";
      const char1= await fetch('https://the-one-api.dev/v2/character', { headers : login });
      const char2 = await char1.json();
      let id=""
      for (let i = 0; i < char2.length; i++) {
          if (char2.docs.name.includes(vari.toLower())) {
             id = char2.docs._id 
          } 
      }
      const specialQuoteRaw = await fetch('https://the-one-api.dev/v2/character/' + id + '/quote', { headers : login });
      const specialQuote = await specialQuoteRaw.json();
      const quote2 = specialQuote.docs[Math.floor(Math.random() * quotes.docs.length)];
      console.log(quote2);
      //sorry for random console things, leaving in for further development, helps get a glimpse into how the api works
    };
    getQuote();
  }, []);
  return(
    <div id="quote">
        <blockquote>{quote}</blockquote>
      <cite>- {char}</cite>
    </div>
  )
}