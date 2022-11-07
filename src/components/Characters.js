import React from 'react';
import { useEffect, useState } from 'react';
export default function Characters() {
    const [charname, setChar2] = useState(0);
    const [quote2, setQuote2] = useState(0);
    const [input, setInput] = useState(0);
  
  useEffect(() => {
    const login = {
      'Accept': 'application/json',
      'Authorization': 'Bearer Br1a0Wv6fVW0Rq9xDuiM'
    }
    function getInput(){
        let inputVal = document.getElementById("inputId").value;
        alert(inputVal);
        setInput(inputVal)
    }
    
    const getQuote2 = async () => {
        //let vari = "Frodo Bag"; //not implemented into webpage yet but functionality is ready
        const char1 = await fetch('https://the-one-api.dev/v2/character', { headers : login });
        const char2 = await char1.json();
        let charname = "";
      let testId=[]
      let vari = inputVal;
      for (let i = 0; i < char2.docs.length; i++) {
          if (char2.docs[i].name.toLowerCase().includes(vari.toLowerCase())) {
            testId.push(char2.docs[i]._id)
            console.log(testId)
            console.log(char2.docs[i].name)
            charname = char2.docs[i].name
          } 
      }
        setChar2(charname);


      const specialQuoteRaw = await fetch('https://the-one-api.dev/v2/character/' + testId[Math.floor(Math.random() * testId.length)] + '/quote', { headers : login });//5cd99d4bde30eff6ebccfbbe
      const specialQuote = await specialQuoteRaw.json();
      const quote2 = specialQuote.docs[Math.floor(Math.random() * specialQuote.docs.length)].dialog/* .docs[Math.floor(Math.random() * specialQuote.docs.length)] */;
     
      setQuote2(quote2);
      //sorry for random console things, leaving in for further development, helps get a glimpse into how the api works
    };
    getQuote2();
  }, []);
    return(
     <div>
        <input type="text" value={input} placeholder="Get quote by character name. " id="inputId" onChange={e => setInput(e.target.value)}></input>
        <button type="button" onclick={getInput}>Get Value</button>
        <div id="quotespes">
        <blockquote>{quote2}</blockquote>
        <cite>- {charname}</cite>
        </div>
     </div >
     )
     }