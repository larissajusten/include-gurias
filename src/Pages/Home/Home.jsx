import React, { Component } from 'react'
import styles from './Home.module.css';
import image from "../../Components/images/DesignHome.png";
import facebook from "../../Components/images/facebook.png";
import instagram from "../../Components/images/instagram.png";
import linkedin from "../../Components/images/linkedin.png";
import youtube from "../../Components/images/youtube.png";
export default class Home extends Component {

    goToNewTab = (link) => {
        window.open(link);
    }
    
    render() {
        return (
            <div className="row">
                <div className={styles.background}>
                    <div className="col-sm-12 col-md-12 align-self-center">
                        <div className="row ">
                            <div className="col-sm-12 col-md-1 fixed-top" style={{paddingTop: "400px"}}>
                                <div className="row-md-3 d-flex justify-content-center">
                                    <img src={instagram} className={styles.instagramLogo} alt="" onClick={()=>{this.goToNewTab("https://www.instagram.com/include.gurias/?hl=pt-br")}}></img>
                                </div>
                                <div className="row-md-3 d-flex justify-content-center">
                                    <img src={facebook} className={styles.facebookLogo} alt="" onClick={()=>{this.goToNewTab("https://www.facebook.com/include.GURIAS/?view_public_for=166605734213202")}}></img>
                                </div>
                                <div className="row-md-3 d-flex justify-content-center">
                                    <img src={linkedin} className={styles.linkedinLogo} alt="" onClick={()=>{this.goToNewTab("https://www.linkedin.com/company/includegurias/?viewAsMember=true")}}></img>
                                </div>
                                <div className="row-md-3 d-flex justify-content-center">
                                    <img src={youtube} className={styles.youtubeLogo} alt="youtube"/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-10 " style={{paddingTop: "410px", paddingLeft: "350px"}}>
                                <div className="row-md-12 d-flex justify-content-center">
                                    <img src={image} className={styles.img} alt="Include Gurias"/>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
