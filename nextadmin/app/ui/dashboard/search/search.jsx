
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';

const Search = ({ placeholder, value, onChange }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default Search;
