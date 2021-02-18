import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from "../redux";

const Repositories: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    dispatch(actionCreators.searchRepositories(term))
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleInputChange} />
      <button type='submit'>Search</button>
    </form>
  </div>
};

export default Repositories;