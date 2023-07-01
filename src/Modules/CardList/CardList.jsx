// Внешнее
import React, { useEffect, useState } from 'react';
// Внутренее
import Card from '../../components/Card/Card';
import { getCards, deleteCard } from '../../api/card';
import { getProfile } from '../../api/profile';

import './CardList.css';

function CardList() {
  const [cards, setCards] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getCards(), getProfile()]).then(([cards, prof]) => {
      setCards(cards);
      setProfile(prof);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  const removeCard = (id) =>
    deleteCard(id).then(() => {
      const newCards = cards.filter((card) => id !== card._id);
      setCards(newCards);
    });

  return (
    <div className='card-list'>
      {cards.map((card) => {
        return (
          <Card
            myId={profile._id}
            id={card._id}
            name={card.name}
            link={card.link}
            key={card._id}
            likes={card.likes}
            owner={card.owner}
            removeCard={removeCard}
          />
        );
      })}
    </div>
  );
}

export default CardList;
