import React,{Component} from 'react';
import Navigation from './Navigation';
import Post from './Post';
import Footer from './Footer';
import '../App.css';
import axios from 'axios';
import Other from './Other';
import {Redirect} from 'react-router-dom';

class Details extends Component {

    //var idFilm = "2baf70d1-42bb-4437-b551-e5fed5a87abe";

    constructor(){
        super();

        this.state ={
            post:[],
            other: [],
            id:""
        };
    };

    componentDidMount(){
        let path = window.location.pathname.split( '/' );
        let urlGet = "https://ghibliapi.herokuapp.com/films/"+path[2];
        //console.log("URL",urlGet);

        axios.get(urlGet)
            .then(responses =>{
                this.setState({
                    post:responses.data
                });
        }).catch(error =>{
            console.log("Error getting content", error);
            alert("Sorry Empty Page!");
            document.location.href="/";
        });

        axios.get('https://ghibliapi.herokuapp.com/films/')
            .then(responses =>{
                this.setState({
                    other:responses.data
                });
            }).catch(error =>{
            console.log("Error getting content", error);
        });


    }

    render(){


        return (
            <div className="App">
                <Navigation />
                <div className="container top-up">
                    <div className="row">
                        <div className="col-md-8">
                            <Post title={this.state.post}/>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4>About us</h4>
                                </div>
                                <div className="card-block paddingt-card">
                                    <p className="card-text">Application To Getting Data Information From Json Using React</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row other-movie">
                        <div className="col-md-12"><h4>Other Movie:</h4></div>
                        <Other data={this.state.other}/>
                    </div>


                </div>
                <Footer/>
            </div>
        );

    }
}

export default Details;