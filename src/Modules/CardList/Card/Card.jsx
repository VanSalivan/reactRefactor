// Внешний
import React, { useState } from 'react';
// Внутренний
import { putLike, deleteLike } from '../../../api/card';

import './Card.css';

function Card({ id, link, name, myId, owner, likes, removeCard }) {
  const [arrLikes, setArrLikes] = useState(likes);

  const isOwner = owner._id === myId;
  const isLiked = arrLikes.find((like) => like._id === myId);

  const addLike = () => putLike(id).then((res) => setArrLikes(res.likes));
  const removeLike = () => deleteLike(id).then((res) => setArrLikes(res.likes));

  return (
    <div className='card'>
      {isOwner && (
        <button
          className='card__delete-button'
          type='button'
          onClick={() => removeCard(id)}
        />
      )}
      <img src={link} alt={name} className='card__image' />
      <h3 className='card__title'>{name}</h3>
      <div className='card__like-container'>
        {isLiked ? (
          <button className='card__liked' type='button' onClick={removeLike} />
        ) : (
          <button className='card__like' type='button' onClick={addLike} />
        )}
        <span className='card__like-counter'>{arrLikes.length}</span>
      </div>
    </div>
  );
}

export default Card;
