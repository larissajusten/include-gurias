import React, { Component } from 'react'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Projeto from "./Pages/Projeto/Projeto";
import Representatividade from './Pages/Representatividade/Representatividade';
import Aulas from './Pages/Aulas/Aulas'
import Podcast from './Pages/Podcast/Podcast';
import Contato from './Pages/Contato/Contato';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            selectedPage: 0
        }
    }

    trocaPagina = (index) => {
        this.setState({
            selectedPage: index
        });
    }
    
    componentDidMount(){

    }

    render() {
        return(
            <div className="row-md-12">
                <div style={{backgroundColor: "yellow"}}>
                    <div className="col-sm-12 col-md-12">
                        <Header trocaPagina={this.trocaPagina} />
                        {   
                            this.state.selectedPage === 0 
                            ? <Home/> 
                            : this.state.selectedPage === 1 
                            ? <Projeto/>
                            : this.state.selectedPage === 2
                            ? <Representatividade/>
                            : this.state.selectedPage === 3
                            ? <Aulas/>
                            : this.state.selectedPage === 4
                            ? <Podcast/>
                            : this.state.selectedPage === 5
                            ? <Contato/>
                            : null
                        } 
                    </div>
                </div>
            </div>
        )
    }
}