import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import MyNavbar from './navbar/MyNavbar';
import SightingList from './sightingList/SightingList';
import AddSighting from "./addSighting/AddSighting";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <MyNavbar/>
                    <div className="container">
                        <Switch>
                            <Route path="/add-sighting" component={AddSighting}/>
                            <Route path="/" component={SightingList}/>
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
