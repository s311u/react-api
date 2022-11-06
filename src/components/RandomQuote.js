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
      setChar(char.name)

      const char1= await fetch('https://the-one-api.dev/v2/character', { headers : login });
      const char2 = await char1.json();
      console.log(char2.docs[Math.floor(Math.random() * char2.docs.length)]);
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