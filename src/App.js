import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Details from "./components/Details";
import Home from './components/Home';

class App extends Component {



    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route path="/details" component={Details} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
