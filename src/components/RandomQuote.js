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
      let vari = "Frodo Bag"; //not implemented into webpage yet but functionality is ready
      const char1= await fetch('https://the-one-api.dev/v2/character', { headers : login });
      const char2 = await char1.json();
      let testId=[]
      for (let i = 0; i < char2.docs.length; i++) {
          if (char2.docs[i].name.includes(vari)) {
            testId.push(char2.docs[i]._id)
            console.log(testId)
            console.log(char2.docs[i].name)
          } 
      }
      const specialQuoteRaw = await fetch('https://the-one-api.dev/v2/character/' + testId[Math.floor(Math.random() * testId.length)] + '/quote', { headers : login });//5cd99d4bde30eff6ebccfbbe
      const specialQuote = await specialQuoteRaw.json();
      const quote2 = specialQuote.docs[Math.floor(Math.random() * specialQuote.docs.length)].dialog/* .docs[Math.floor(Math.random() * specialQuote.docs.length)] */;
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