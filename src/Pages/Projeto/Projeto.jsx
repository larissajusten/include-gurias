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
                                <div className={styles.titleWhoweare}>
                                    QUEM SOMOS
                                </div>
                                <div className= {"row " + styles.whoweare}>
                                    Transformando o mundo através do conhecimento.                                    
                                </div>
                                <div className= {"row " + styles.presentationWhoweare}>
                                    O projeto #include{"<gurias>"} visa divulgar a área da STEM em busca de desenvolver o pensamento lógico computacional em meninas de todas as idades. Nosso objetivo é incentivar e motivar cada vez mais meninas e mulheres a fazerem parte de áreas de inovação e tecnologia, bem como, estimular o raciocínio lógico e o interesse por exatas, afim de mostrar que todas são capazes de seguir qualquer caminho.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={"col-md-12 text-center"} style={{background: "rgba(255, 243, 221, 0.54)", height:"680px"}}>
                                <div className= {styles.titleGlossary + " text-center"}>
                                    GLOSSÁRIO
                                </div>
                                <div className= "row" style={{paddingBottom:"50px "}}>
                                    <div className= "col-md-12 text-center ">
                                        <div className= "row" style={{paddingTop: "50px", paddingLeft: "600px"}}>
                                            <div className= {styles.subTitleGlossary + " text-center"}>
                                                Include:
                                            </div>
                                            <div className= {styles.glossary + " text-left"}>
                                                Termo utilizado na programação para incluir um arquivo em seu projeto. Pode ser uma biblioteca ou um outro arquivo de código fonte.        
                                            </div>
                                        </div>
                                        <div className= "row" style={{paddingTop: "10px", paddingLeft: "600px", paddingRight: "850px"}}>
                                            <div className= {styles.subTitleGlossary + " text-center"}>
                                                STEM:
                                            </div>
                                            <div className= {styles.glossary + " text-left"}>
                                                É um termo em inglês usado para designar o campo do conhecimento compogsto por Ciências, Tecnologia, Engenharia e Matemática (Science, Technology, Engineering and Mathematics).    
                                            </div>     
                                        </div>
                                        <div className= "row" style={{paddingTop: "10px", paddingLeft: "600px"}}>
                                            <div className= {styles.subTitleGlossary + " text-center"}>
                                                Pensamento Lógico Computacional:
                                            </div>
                                            <div className= {styles.glossary + " text-left"}>
                                                Processo de pensamento envolvido na formulação de um problema e na expressão de sua solução.
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className= "row">
                            <div className={"col-md-12 text-center"} style={{background: "white", height: "680px"}}>
                                <div className= {styles.titleCredits + " text-center"}>
                                    CRÉDITOS
                                </div>
                                <div className= "row" style={{backgroundColor:"white", paddingBottom:"50px "}}>
                                    <div className= "col-md-4 text-center ">
                                        <div className= {styles.imgCredits + " text-center"}>

                                        </div>
                                        <div className= {styles.nameCredits + " text-center"}>
                                            Fabrícia Damando Santos
                                        </div>
                                        <div className= {styles.functionCredits + " text-center"}>
                                            Coordenadora
                                        </div>
                                    </div>
                                    <div className= "col-md-4 text-center ">
                                        <div className= {styles.imgCredits + " text-center"}>

                                        </div>
                                        <div className= {styles.nameCredits + " text-center"}>
                                            Luana Sperling Santana
                                        </div>
                                        <div className= {styles.functionCredits + " text-center"}>
                                            Arte e Design
                                        </div>
                                    </div>
                                    <div className= "col-md-4 text-center ">
                                        <div className= {styles.imgCredits + " text-center"}>

                                        </div>
                                        <div className= {styles.nameCredits + " text-center"}>
                                            Michele Liese da Silva
                                        </div>
                                        <div className= {styles.functionCredits + " text-center"}>
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
