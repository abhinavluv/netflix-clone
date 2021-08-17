import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomeScreen from './components/HomeScreen/HomeScreen.component';
import Login from './components/Login/Login.component';

function App() {
    const user = null;
    return (
        <div className='App'>
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <Switch>
                        <Route exact path='/'>
                            <HomeScreen />
                        </Route>
                    </Switch>
                )}
            </Router>
        </div>
    );
}

export default App;
