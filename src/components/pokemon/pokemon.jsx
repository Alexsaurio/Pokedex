import React, { Component } from 'react';

import axiosPoke from '../../axios/axios-poke';
import Tipos from '../tipos/tipos';

class Pokemon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      imagen: [],
      tipos: []
    };
  }

  componentDidMount() {
    this.buscarPokemon(this.props.datos.name);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
      this.buscarPokemon(nextProps.datos.name);
  }

  buscarPokemon(pokemon){
    axiosPoke.get('/pokemon/' + pokemon + '/')
      .then(reponse => {
        this.setState({ pokemon: reponse.data });
        this.setState({ imagen: reponse.data.sprites.front_default });
        this.setState({ tipos: this.state.pokemon.types });

      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const { pokemon }= this.state;

    return (
      <div className="Pokemon" onClick={e => this.props.PokemonView(e, pokemon)}>
        <p className="Nombre">{pokemon.name}</p>
        <img src={this.state.imagen} alt={pokemon.name} />
        <Tipos tipos={this.state.tipos} />

      </div>
    );
  }
}

export default Pokemon;