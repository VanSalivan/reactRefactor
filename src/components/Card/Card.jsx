import React from 'react';

import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <button className='card__delete-button' type='button' />
      <img src={props.link} alt={props.name} className='card__image' />
      <h3 className='card__title'>{props.name}</h3>
      <div className='card__like-container'>
        <button className='card__like' type='button' />
        <span className='card__like-counter'>0</span>
      </div>
    </div>
  );
}

export default Card;
