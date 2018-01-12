import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Headers from './components/Headers';
import Content from './components/Content';
import Footer from './components/Footer';
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Details from "./components/Details";

class App extends Component {

    constructor(){
        super();
        this.state ={
            content: []
        };
    };

    componentDidMount(){

        // Traditional Method
        /*fetch('https://ghibliapi.herokuapp.com/films')
            .then(responses => responses.json())
            .then(responsesData => {
                this.setState({ content:responsesData});
            })
            .catch(function(error) {
                console.log("Error getting content", error)
            });*/

        axios.get('https://ghibliapi.herokuapp.com/films')
            .then(responses => {
                this.setState({
                    content:responses.data
                });
            }).catch(error =>{
            console.log("Error getting content", error)
        });
    };

    render() {
        // check data has fecting
        //console.log(this.state.content);
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/details" component={Details} />
                  <Navigation />
                    <div className="container top-up">

                      <Headers/>

                      <div className="card text-white bg-secondary my-4 text-center">
                          <div className="card-body">
                              <p className="text-white m-0">Our movie database list</p>
                          </div>
                      </div>

                      <div className="row">

                        <Content data={this.state.content}/>

                      </div>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
