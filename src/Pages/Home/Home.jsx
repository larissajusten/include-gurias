import React, { Component } from 'react'
import styles from './Home.module.css';
import image from "../../Components/images/DesignHome.png";
export default class Home extends Component {
    
    render() {
        return (
            <div className="row">
                <div className={styles.background}>
                    <div className={styles.centerImage}>
                        <img src={image} className={styles.img} media="screen and (min-width: 340px)" alt="Include Gurias"/>
                    </div>
                </div>
            </div>
        )
    }
}
