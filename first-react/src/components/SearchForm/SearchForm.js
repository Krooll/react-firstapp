import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: search });   
        setSearch('');
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
            <Button>
                <span className="fa fa-search"></span>
            </Button>
        </form>
    );
  };

  export default SearchForm;