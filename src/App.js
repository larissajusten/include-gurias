import React, { Component } from 'react'
import styles from './App.module.css';
import Header from './Components/Header/Header';

export default class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className={styles.fundo}></div>
            </div>
        )
    }
}