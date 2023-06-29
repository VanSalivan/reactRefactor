import React from 'react';

import './Card.css';

function Card(props) {
  return (
    <div class='card'>
      <button class='card__delete-button' type='button'></button>
      <img src={props.link} alt={props.name} class='card__image' />
      <h3 class='card__title'>{props.name}</h3>
      <div class='card__like-container'>
        <button class='card__like' type='button'></button>
        <span class='card__like-counter'>0</span>
      </div>
    </div>
  );
}

export default Card;
