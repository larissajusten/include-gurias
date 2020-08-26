import React, { Component } from 'react'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Projeto from "./Pages/Projeto/Projeto";
import Representatividade from './Pages/Representatividade/Representatividade';
import Aulas from './Pages/Aulas/Aulas'
import Podcast from './Pages/Podcast/Podcast';
import Contato from './Pages/Contato/Contato';
import styles from './App.module.css';
import { ScrollTo} from "react-scroll-to";

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

    scrollTo = (x, y) => { 
        
    }
    
    componentDidMount(){
        
    }

    render() {
        return(
            <body className={styles.over + " row-md-12"}>
                <div>
                    <div className="col-sm-12 col-md-12">
                        <ScrollTo >
                            {({ scroll }) => (
                                <div>
                                    <Header trocaPagina={this.trocaPagina} scrollTo={scroll}/>
                                    {   
                                        (this.state.selectedPage === 0 ||this.state.selectedPage === 1) ?
                                            <div>
                                                <Home/> 
                                                <Projeto/>
                                            </div>    
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
                            )}
                        </ScrollTo>
                    </div>
                </div>
            </body>
        )
    }
}