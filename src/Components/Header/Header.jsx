import React, { Component } from 'react'
import image from "../images/Tentativa44.png";
import styles from './Header.module.css';


export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedPage: 0
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = (index) => {
        this.setState({
            selectedPage: index
        });
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md text-center"> 
                        <img src={image} className={styles.logo}></img>
                    </div>
                    <div className="col-md" style={{alignSelf: "center", paddingTop: "40px"}}>
                        <div className={this.state.selectedPage === 0 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected} onClick={()=>{this.onClick(0)}}> 
                            Home 
                        </div>
                    </div>
                    <div className="col-md" style={{alignSelf: "center", paddingTop: "40px"}}>
                        <div className={this.state.selectedPage === 1 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(1)}}>
                            Projeto
                        </div>
                    </div>
                    <div className="col-md-2" style={{alignSelf: "center", paddingTop: "40px"}}>
                        <div className={this.state.selectedPage === 2 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(2)}}>
                            Representatividade
                        </div>
                    </div>
                    <div className="col-md" style={{alignSelf: "center", paddingTop: "40px"}}>
                        <div className={this.state.selectedPage === 3 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(3)}}>
                            Aulas
                        </div>
                    </div>
                    <div className="col-md" style={{alignSelf: "center", paddingTop: "40px"}}>
                        <div className={this.state.selectedPage === 4 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(4)}}>
                            Podcast
                        </div>
                    </div>
                    <div className="col-md" style={{alignSelf: "center", paddingTop: "40px"}}>
                        <div className={this.state.selectedPage === 5 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(5)}}>
                            Contato
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}