import React, {Component} from 'react';
import Navigation from './Navigation';
import Headers from './Headers';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';


class Home extends Component {

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
                <div className="App">
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
        );
    }
}

export default Home;