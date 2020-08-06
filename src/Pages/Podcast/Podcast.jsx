import React, { Component } from 'react';
import styles from './Podcast.module.css';

class Podcast extends Component {
    render() {
        return (
            <div className="row">
                <div className={styles.background}>
                    Podcast
                </div>
            </div>
        );
    }
}

export default Podcast;