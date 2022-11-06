import React from 'react';
import { useEffect, useState } from 'react';
export default function Characters() {

  useEffect(() => {
    const [char, setChar] = useState(0);
    const login = {
      'Accept': 'application/json',
      'Authorization': 'Bearer Br1a0Wv6fVW0Rq9xDuiM'
    }
    const getChar = async () => {
      const apiChars = await fetch('https://the-one-api.dev/v2/character', {
        headers: login
      })
      const characters = await apiChars.json();
      char=[];
      for (let i = 0; i < char.docs.length; i++) {
        char[i]=characters.name;
      }
      return char;
    };
    getChar();
  }, []);
    return(
     <div>
        These are the available characters:
        {char}
     </div >
     )
     }