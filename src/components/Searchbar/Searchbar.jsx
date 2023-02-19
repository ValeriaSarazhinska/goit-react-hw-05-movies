import { useState } from 'react';
import { Notify } from 'notiflix';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      Notify.failure('Enter a query name.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchFormInput}
        type="text"
        name="name"
        value={query}
        onChange={handleNameChange}
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
      <button className={css.searchFormButton} type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
