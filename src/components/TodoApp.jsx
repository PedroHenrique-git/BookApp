import React from 'react';
import Requisicao from '../config/requisicao';

class Attacks extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.atks === undefined){
            return <p>Não possui ataque</p>
        }else{
            console.log(this.props.atks)

            return (
                <ul>
                    {
                        this.props.atks.forEach( (item,index) =>{
                            <li key={index}>
                                <h1>Ataques</h1>
                                {item.name}
                            </li>
                        })
                    }
                </ul>
            );  
        }
    }
}

class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          cards: []
        };
        this.base_url = 'https://api.pokemontcg.io/v1/cards';
      }
    
      componentDidMount() {
        Requisicao(this.base_url)
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                cards: result.cards
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        if(this.state.error){
            return <div>Erro: {this.state.error}</div>
        }else if(!this.state.isLoaded){
            return <div>Carregando...</div>   
        }else{
            return (
                <div>
                  {this.state.cards.map((item,index) => (
                    <div key={index}>
                        <p>id: {item.id}</p>
                        <p>Nome: {item.name}</p>
                        <p>Id nacional na pokedex: {item.nationalPokedexNumber}</p>
                        <img src={item.imageUrl} />
                        <p>Tipo: {item.types}</p>
                        <p>Super tipo: {item.supertype}</p>
                        <p>Sub tipo: {item.subtype}</p>
                        <p>Forma evoluida: {item.evolvesFrom}</p>
                        <p>Vida: {item.hp}</p>
                        <p>Número: {item.number}</p>
                        <p>Raridade: {item.rarity}</p>
                        <p>Serie: {item.series}</p>
                        <p>Set: {item.set}</p>
                        <p>Set Code: {item.setCode}</p>
                        <div className="attacks">
                            <Attacks atks={item.attacks}/>
                        </div>
                    </div>
                  ))}
                </div>
            );
        }
      }
}

export default class TodoApp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Cards /> 
            </div>
        );
    }
}