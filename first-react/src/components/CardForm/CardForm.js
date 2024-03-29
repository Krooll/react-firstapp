import { useState } from 'react';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardRedux';

const CardForm = ({columnId}) => {
    const dispatch= useDispatch(addCard);
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title, columnId}));
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput className={styles.cardInput} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Card</Button> 
        </form>
    );
};

export default CardForm;