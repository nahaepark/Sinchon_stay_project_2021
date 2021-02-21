import './App.css';
import Header from './components/Header'
import Home from './routes/Home'
import SearchPage from './routes/SearchPage'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/reservation'>
            <SearchPage />
          </Route>
          <Route path = '/'>
            <Home />  
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
