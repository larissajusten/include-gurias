import React, { Component } from 'react'
import styles from './App.module.css';
import Header from './Components/Header/Header';
import image from "./Components/images/DesignHome.png";

export default class App extends Component {
    render() {
        return(
            <div className = "col-md">
                <div className = "row-md">
                    <Header/>
                </div>
                <div className = "row-md text-center" style={{backgroundColor: "red"}}>
                    <div className={styles.fundo}>
                        <img src={image} className={styles.img}></img>
                    </div>
                </div>
            </div>
        )
    }
}