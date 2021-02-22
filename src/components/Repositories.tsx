import { useState } from 'react';
// import { useSelector } from 'react-redux'; // same as mapStateToProps for class components

import { useTypedSelector } from "../custom-hooks/useTypedSelector"; // useSelector, but annotated
import { useActions } from '../custom-hooks/useActions';

const Repositories: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions()
  const { loading, error, data } = useTypedSelector((state) => state.repositories)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    searchRepositories(term)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleInputChange} />
      <button type='submit'>Search</button>
    </form>
    {loading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {!loading && !error && 
     <ul>
        {
          data.map(result => (
            <li key={result}>
              {result}
           </li>))
        }
     </ul>
    }
  </div>
};

export default Repositories;