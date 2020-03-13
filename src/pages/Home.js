import React from 'react';
import App from '../App';
import { Card } from 'semantic-ui-react';

const items = [
    {
      header: 'Rodzaje wędrówek',
      description:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'Procentowy udział wędrówek w zależności od spędzonego czasu',
    },
    {
      header: 'Czas wędrówek',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'Ile czasu poświęciłeś w tygodniu na wędrówki',
    },
];

function Home(){
    return( 
    <div>
        <App />
        <Card.Group centered fluid items={items} />
    </div>)
}

export default Home;

