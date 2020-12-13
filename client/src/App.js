import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Header from './components/header';

//Pages
import Content from './pages/content';
import Post from './pages/post';
import Error from './pages/error';
import Write from './pages/write';
import Created from './pages/created';

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/' component={Content} exact/>
                <Route path='/post/:id' component={Post}/>
                <Route path='/write' component={Write}/>
                <Route path='/created' component={Created}/>
                <Route component={Error}/>
            </Switch>
        </Router>
    );
}

export default App;
