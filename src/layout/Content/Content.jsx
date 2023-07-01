// Внешнее
import React from 'react';

// Внутренее
import CardList from '../../modules/CardList/CardList';
import Profile from '../../modules/Profile/Profile';

function Content() {
  return (
    <main>
      <Profile />
      <CardList />
    </main>
  );
}

export default Content;
