import React, { Component } from 'react';

import axiosPoke from '../../axios/axios-poke';

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

    const {pokemon, imagen }= this.state;
    let tipo1 = "";
    let tipo2 = "";
    let tipos;
    if (this.state.tipos.length === 1) {
      tipo1 = this.state.tipos[0].type.name;
      tipos = <p> <span className={tipo1}>{tipo1}</span></p>;
    } else if (this.state.tipos.length === 2) {
      tipo1 = this.state.tipos[0].type.name;
      tipo2 = this.state.tipos[1].type.name;
      tipos = <p> <span className={tipo1}>{tipo1}</span>  <span className={tipo2}>{tipo2}</span></p>
    }
    return (
      <div className="Pokemon" onClick={e => this.props.PokemonView(e, pokemon, imagen)}>
        <p className="Nombre">{pokemon.name}</p>
        <img src={this.state.imagen} alt={pokemon.name} />
        {tipos}

      </div>
    );
  }
}

export default Pokemon;