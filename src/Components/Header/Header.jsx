import React, { Component } from 'react'
import image from "../../images/Tentativa44.png";
import styles from './Header.module.css';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedPage: 0,
            currentPage: 0
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = (index) => {
        this.setState({
            selectedPage: index
        });

        this.props.trocaPagina(index);
        
        if(index === 1 && this.state.currentPage === 0){
            this.props.scrollTo({ y: 805, smooth: true});    
        }else if(index === 1 && this.state.currentPage !==0){
            setTimeout(() => {
                this.props.scrollTo({ y: 805, smooth: true});        
            }, 100);
        }else{
            this.props.scrollTo({ y: 0, smooth: true});    
        }
        
        this.setState({
            currentPage: index
        });
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        console.log("andei : " + winScroll);

        if(winScroll >= 805){
            this.setState({
                selectedPage: 1
            });
        }
        if(winScroll < 805 && this.state.selectedPage === 1){
            this.setState({
                selectedPage: 0
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
    
    render() {
        return (
            <div className={"row fixed-top " + styles.header}>
                <div className="col-md-3 text-left"> 
                    <img src={image} className={styles.logo} alt="Include Gurias"/>
                </div>
                <div className="col-md user-select-none" style={{alignSelf: "center", paddingTop: "20px"}}>
                    <div className={this.state.selectedPage === 0 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected} onClick={()=>{this.onClick(0)}}> 
                        Home 
                    </div>
                </div>
                <div className="col-md user-select-none" style={{alignSelf: "center", paddingTop: "20px"}}>
                    <div className={this.state.selectedPage === 1 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(1)}}>
                        Projeto
                    </div>
                </div>
                <div className="col-md-2 user-select-none" style={{alignSelf: "center", paddingTop: "20px"}}>
                    <div className={this.state.selectedPage === 2 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(2)}}>
                        Representatividade
                    </div>
                </div>
                <div className="col-md user-select-none" style={{alignSelf: "center", paddingTop: "20px"}}>
                    <div className={this.state.selectedPage === 3 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(3)}}>
                        Aulas
                    
                    </div>
                </div>
                <div className="col-md user-select-none" style={{alignSelf: "center", paddingTop: "20px"}}>
                    <div className={this.state.selectedPage === 4 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(4)}}>
                        Podcast
                    </div>
                </div>
                <div className="col-md user-select-none" style={{alignSelf: "center", paddingTop: "20px"}}>
                    <div className={this.state.selectedPage === 5 ? styles.buttonHeaderSelected : styles.buttonHeaderNotSelected}onClick={()=>{this.onClick(5)}}>
                        Contato
                    </div>
                </div>
            </div>
        );
    }
}