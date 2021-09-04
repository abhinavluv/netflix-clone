import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomeScreen from './components/HomeScreen/HomeScreen.component';
import Login from './components/Login/Login.component';
import Profile from './components/Profile/Profile.component';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // LoggedIn
                dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
            } else {
                // LoggedOut
                dispatch(logout());
            }
        });

        // Clean-up
        return unsubscribe;
    }, [dispatch]);

    return (
        <div className='App'>
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <Switch>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
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
