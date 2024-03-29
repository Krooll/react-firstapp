import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardRedux';

const Column = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id))
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} isFavorite={card.isFavorite} id={card.id}>{card.title}</Card>)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    );    
};

export default Column;