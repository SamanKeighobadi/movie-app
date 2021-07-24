import {Switch,Route} from 'react-router-dom';
import Home from './components/Home.jsx'
import './assets/main.css'
import SingleMoviePage from './components/SingleMoviePage.jsx';

const App = () => {
  

  return (
    <div className='bg-gray-900'>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/singlePage" component={SingleMoviePage} />
        </Switch>
    </div>
  );
};

export default App;
