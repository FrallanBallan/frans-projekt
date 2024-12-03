import { useState } from 'react';
import { IUnit } from '../../models/IUnit';
import { fetchSearch } from '../../utilities/FetchSearch/fetchSearch';
import CardContainer from '../../components/CardContainer/CardContainer';
import Button from '../../components/UI/Buttons/Button';
import styles from './Searchpage.module.css';

const Searchpage = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<IUnit[]>([]); //
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      const data = await fetchSearch(query);
      setResults(data); //
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.searchWrap}>
        <div className={styles.searchBar}>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search for items...'
          />

          <Button text='Search' onClick={handleSearch} className='search-btn' />
        </div>
        {loading && results.length === 0 ? (
          <h3>No units found...</h3>
        ) : (
          <CardContainer units={results} />
        )}
      </div>
    </>
  );
};

export default Searchpage;
