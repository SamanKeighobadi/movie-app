import "./assets/main.css";
import {Switch,Route} from 'react-router-dom'
import Home from "./Home";

function App() {



  return (
    <div className="bg-gray-900 h-full">
    
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/moviePage" />
    </Switch>
    </div>
  );
}

export default App;
