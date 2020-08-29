import React, { Component } from 'react'
import styles from './Projeto.module.css';

export default class Home extends Component {
    
    render() {
        return (
            <div className="row">
                <div className={styles.background}>
                    <div className="col-md-12">
                        <div className="row" style={{backgroundColor: "white", height: "680px"}}>
                            <div className= "col-md-6 text-center" style={{backgroundColor: "rgba(255, 211, 235, 0.54)"}}>
                                Quem somos
                            </div>
                            <div className= "col-md-6">
                                blablablabla
                            </div>
                        </div>
                        <div className="row" style={{backgroundColor:"rgba(255, 243, 221)", height:"680px"}}>
                            <div className={"col-md-12 text-center"}>
                                Glossário
                            </div>
                        </div>
                        <div>
                        <div className={"col-md-12 text-center"} style={{background: "#FFFFFF", height:"173px"}}>
                            <div>
                                Créditos
                            </div>
                        </div>
                        <div className= "row" style={{backgroundColor:"#FFFFFF", height:"427px"}}>
                            <div className= "col-md-4 text-center" style={{}}>
                                Fabrícia
                            </div>
                            <div className= "col-md-4 text-center">
                                Luana
                            </div>
                            <div className= "col-md-4 text-center">
                                Michele
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
