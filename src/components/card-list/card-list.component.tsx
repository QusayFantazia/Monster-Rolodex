 import Card from '../card/card.component';
import './card-list.styles.css';

import { monster } from '../../App';
type CardListProps  = {
  monsters : monster[]
}
const CardList = ({ monsters } : CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster : monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
