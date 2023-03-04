import { useState, useEffect } from 'react';
import Search from './components/Search';
import Countries from './components/Countries';
import countryService from './services/countryService';
const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState('');

  const handleInput = (e) => {
    const val = e.target.value.trim();
    setCountries(null);

    if (!val.match(/^\s*$/)) {
      countryService
        .getCountries(val)
        .then((r) => {
          setCountries(r.data);
          setError('');
        })
        .catch((err) => {
          setError('No matches..');
        });
    }
  };
  return (
    <div>
      <Search handleInput={handleInput}></Search>
      <Countries err={error} countries={countries}></Countries>
    </div>
  );
};

export default App;
