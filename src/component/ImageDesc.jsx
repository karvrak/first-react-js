import data from "../data/tab.json";
import React, { useState, useEffect } from 'react';
import { imageDescStyle, flavorStyle } from "../config/style";
import ReactHtmlParser from 'html-react-parser';


export function ImageDesc({imageId}) {


  const [card, setCard] = useState(data.find(card => card.id ===imageId ));

  useEffect(() => {
    const cardInfo = data.find(card => card.id ===imageId );
    setCard(cardInfo);
  }, [imageId]);

  const options = {
    transform: (node, index) => {
      if (node.name === "img" && node.attribs.src) {
        node.attribs.src = `${process.env.PUBLIC_URL}/${node.attribs.src.split("/").pop()}`;
      }
      return node;
    },
  };


  console.log(card.RuleText);
  
  return (
    <div style={imageDescStyle} >
      <h2>{card.name}</h2>
      <p> {card.type}</p>
      <img 
              src={`../assets/setSymbol/set-symbol-${card.rarity}.png`} 
              alt={`rarity : ${card.rarity}`} 
      /> <br/>

      {ReactHtmlParser(card.RuleText,options)}
      {<p style={flavorStyle}>{card.flavorText}</p>}
      {<p>{card.pt}</p>}
     </div>      
  );
}