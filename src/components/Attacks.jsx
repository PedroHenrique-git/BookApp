import React from 'react';

export default class Attacks extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.atks === undefined){
            return <p>Não possui ataque</p>
        }else{
            return (
                <ul className="attacks">
                    {this.props.atks.map( (atk, index) => 
                        <li key={index}>
                            <p>Ataque {index}: {atk.name}</p>
                            <p>Descrição ataque {index}: {atk.text}</p>
                            <p>Dano ataque {index}: {atk.damage}</p>
                            <p>Custo de energia ataque {index}: {atk.convertedEnergyCost}</p>
                        </li>
                    )}
                </ul>
            );  
        }
    }
}