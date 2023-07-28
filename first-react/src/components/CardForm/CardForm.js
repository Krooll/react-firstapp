import { useState } from 'react';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
    const [title,setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
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