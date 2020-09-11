import React, { Component } from 'react'
import styles from './Projeto.module.css';

export default class Home extends Component {
    
    render() {
        return (
            <div className="row">
                <div className={styles.background}>
                    <div className="col-md-12">
                        <div className="row" style={{backgroundColor: "white", height: "680px"}}>
                            <div className= "col-md-6 text-right" style={{backgroundColor: "rgba(255, 211, 235, 0.54)"}}>
                                
                            </div>
                            <div className= "col-md-6">
                                <div className={styles.titleWhoweare + " user-select-none"}>
                                    QUEM SOMOS
                                </div>
                                <div className= {"row user-select-none " + styles.whoweare}>
                                    Transformando o mundo através do conhecimento.                                    
                                </div>
                                <div className= {"row user-select-none " + styles.presentationWhoweare}>
                                    O projeto #include{"<gurias>"} visa divulgar a área da STEM em busca de desenvolver o pensamento lógico computacional em meninas de todas as idades. Nosso objetivo é incentivar e motivar cada vez mais meninas e mulheres a fazerem parte de áreas de inovação e tecnologia, bem como, estimular o raciocínio lógico e o interesse por exatas, afim de mostrar que todas são capazes de seguir qualquer caminho.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={"col-md-12 text-center"} style={{background: "rgba(255, 243, 221, 0.54)", paddingBottom:"140px"}}>
                                <div className= {styles.titleGlossary + " text-center user-select-none"}>
                                    GLOSSÁRIO
                                </div>
                                <div className= "row" style={{paddingBottom:"50px "}}>
                                    <div className= "col-md-12 text-center">
                                        <div className= "row" style={{paddingTop: "100px", paddingLeft: "450px", paddingRight: "300px"}}>
                                            <div className= {styles.subTitleGlossary + " text-center user-select-none"}>
                                                Include:
                                            </div>
                                            <div className= {styles.glossary + " text-left user-select-none"}>
                                                Termo utilizado na programação para incluir um arquivo em seu projeto. Pode ser uma biblioteca ou um outro arquivo de código fonte.        
                                            </div>
                                        </div>
                                        <div className= "row" style={{paddingLeft: "450px", paddingRight: "300px"}}>
                                            <div className= {styles.subTitleGlossary + " text-center user-select-none"}>
                                                STEM:
                                            </div>
                                            <div className= {styles.glossary + " text-left user-select-none"}>
                                                É um termo em inglês usado para designar o campo do conhecimento compogsto por Ciências, Tecnologia, Engenharia e Matemática (Science, Technology, Engineering and Mathematics).    
                                            </div>     
                                        </div>
                                        <div className= "row" style={{paddingTop: "10px", paddingLeft: "450px", paddingRight: "300px"}}>
                                            <div className= {styles.subTitleGlossary + " text-center user-select-none"}>
                                                Pensamento Lógico Computacional:
                                            </div>
                                            <div className= {styles.glossary + " text-left user-select-none"}>
                                                Processo de pensamento envolvido na formulação de um problema e na expressão de sua solução.
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className= "row">
                            <div className={"col-md-12 text-center"} style={{background: "white"}}>
                                <div className= {styles.titleCredits + " text-center user-select-none"}>
                                    CRÉDITOS
                                </div>
                                <div className= "row" style={{paddingBottom:"50px "}}>
                                    <div className= "col-md-4 ">
                                        <div className="row  justify-content-center">
                                            <div className= {styles.imgCredits + " user-select-none"}>
                                                
                                            </div>
                                        </div>
                                        <div className= {styles.nameCredits + " text-center user-select-none"}>
                                            Fabrícia Damando Santos
                                        </div>
                                        <div className= {styles.functionCredits + " text-center user-select-none"}>
                                            Coordenadora
                                        </div>
                                    </div>
                                    <div className= "col-md-4 text-center">
                                        <div className="row  justify-content-center">
                                            <div className= {styles.imgCredits + " user-select-none"}>

                                            </div>
                                        </div>
                                        <div className= {styles.nameCredits + " text-center user-select-none"}>
                                            Luana Sperling Santana
                                        </div>
                                        <div className= {styles.functionCredits + " text-center user-select-none"}>
                                            Arte e Design
                                        </div>
                                    </div>
                                    <div className= "col-md-4 text-center">
                                        <div className="row  justify-content-center">
                                            <div className= {styles.imgCredits + " user-select-none"}>
                                                
                                            </div>
                                        </div>
                                        <div className= {styles.nameCredits + " text-center user-select-none"}>
                                            Michele Liese da Silva
                                        </div>
                                        <div className= {styles.functionCredits + " text-center user-select-none"}>
                                            Desenvolvedora
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
