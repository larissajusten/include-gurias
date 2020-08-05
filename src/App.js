import React, { Component } from 'react'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Projeto from "./Pages/Projeto/Projeto";

export default class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state ={
            selectedPage: 0
        }
    }
    
    componentDidMount(){

    }

    render() {
        return(
            <div className="row-md-12">
                <div style={{backgroundColor: "yellow"}}>
                    <div className="col-sm-12 col-md-12">
                        <Header/>
                        {this.state.selectedPage == 0 ? <Home/> : <Projeto/>}
                    </div>
                </div>
            </div>
        )
    }
}