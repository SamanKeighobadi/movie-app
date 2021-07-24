import {Switch,Route} from 'react-router-dom';
import Home from './components/Home.jsx'
import './assets/main.css'

const App = () => {
  

  return (
    <div className='bg-gray-900'>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </div>
  );
};

export default App;
