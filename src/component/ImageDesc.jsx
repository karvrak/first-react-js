import data from "../data/tab.json";
import React, { useState, useEffect } from 'react';
import { imageDescStyle } from "../config/style";


export function ImageDesc({imageId}) {


  const [card, setCard] = useState({});

  useEffect(() => {
    const cardInfo = data.find(card => card.id ===imageId );
    setCard(cardInfo);
  }, [imageId]);



  return (
    <div style={imageDescStyle} >
      <h2>{card.name}</h2>
      <p> {card.type}</p>
      
      <img 
              src={`${process.env.PUBLIC_URL}/assets/setSymbol/set-symbol-${card.rarity}.png`} 
              alt={`rarity : ${card.rarity}`} 
      />           
      <p>Rule Text: {card.RuleText}</p>
      {card.flavorText && <p>Flavor Text: {card.flavorText}</p>}
      {card.pt && <p>Power/Toughness: {card.pt}</p>}
     </div>      
  );
}