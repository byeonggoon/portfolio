import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import IntroPage from './page/IntroPage';
import MainPage from './page/MainPage';
import WebPage from './page/WebPage';
import BlockPage from './page/BlockPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/pagetest" component={IntroPage} />
                <Route exact path="/main" component={MainPage} />
                <Route exact path="/Web" component={WebPage} />
                <Route exact path="/Block" component={BlockPage} />
            </Switch>
        </Router>
    );
}

export default App;
