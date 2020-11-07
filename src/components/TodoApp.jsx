import React from 'react';
import Attacks from './Attacks';

const pokemon = require('pokemontcgsdk');

export default class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          cards: [],
          inputValue: '',
          qtd: 10,
          text: 'Carregar mais'
        };
      }
      handleQtdPage = () => {
          this.setState({
              qtd: this.state.qtd + 10,
          })
          this.componentDidMount();
      }

      handleChangeInput = (e) => {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        });
      }

      componentDidMount() {
        pokemon.card.where({pageSize: this.state.qtd}).then(cards => {
            this.setState({
                isLoaded: true,
                cards: cards,
                text: 'Carregar mais'
            });    
        })
      }

      handleSubmit = (e) => {
          e.preventDefault();
          pokemon.card.where({name: this.state.inputValue}).then(cards => {
            this.setState({
                isLoaded: true,
                cards: cards,
                text: 'Voltar para página anterior',
            });
          });
      }
    
      render() {
        if(this.state.error){
            return <div>Erro: {this.state.error}</div>
        }else if(!this.state.isLoaded){
            return <div>Carregando...</div>   
        }else{
            return (
                <div className="container-cards">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChangeInput} value={this.state.inputValue} type="text"/>
                        <input className="button" type="submit" value="Pesquisar pokemon"/>
                    </form>
                  {this.state.cards.map((item,index) => (
                    <div key={index} className="card">
                        <div className="image">
                            <img src={item.imageUrl} />
                        </div>

                        <div className="informacoes">
                            <p>id: {item.id}</p>
                            <p>Nome: {item.name}</p>
                            <p>Id nacional na pokedex: {item.nationalPokedexNumber}</p>
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
                    </div>
                  ))}
                  <button onClick={this.handleQtdPage} className="button">{this.state.text}</button>
                </div>
            );
        }
      }
}

