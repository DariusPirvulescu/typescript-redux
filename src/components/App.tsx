import { Provider } from "react-redux";

import { store } from "../redux";
import Repositories from './Repositories';

const App = () => {

  return (
    <Provider store={store}>
      <h1>App</h1>
      <Repositories />
    </Provider>
    );
};

export default App;