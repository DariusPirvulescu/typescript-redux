import { useState } from 'react';

import { useActions } from '../custom-hooks/useActions';

const Repositories: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions()

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
  </div>
};

export default Repositories;