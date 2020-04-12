import React, { Component } from 'react';

import Pokemon from '../../components/pokemon/pokemon';
import Au from '../../components/utils/au/au';
import Modal from '../../components/utils/modal/modal';
import Tipos from '../../components/tipos/tipos';
import Habilidad from '../../components/habilidad/habilidad';
import Estadisticas from '../../components/estadisticas/estadisticas'

class PokemonList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalView: false,
            pokemonView: [],
        };
    }

    modalPokemonHandler = () => {
        this.setState({ modalView: !this.state.modalView });
    }

    // modalCardCancelHandler = () => {
    //     this.setState({ modalCard: false, pokemon: [] });
    // }

    pokemonShow = (e, pokemon) => {
        let imgFron = pokemon.sprites.front_default;
        let imgBack = pokemon.sprites.back_default;
        let tipos = pokemon.types;
        let habi = pokemon.abilities;
        let stats = pokemon.stats;

        this.setState({
            pokemonView: {
                name: pokemon.name,
                imgFron: imgFron,
                imgBack: imgBack,
                peso: pokemon.weight / 10,
                altura: pokemon.height / 10,
                tipos: tipos,
                habi: habi,
                stats: stats
            }
        });
        console.log(pokemon);
        this.modalPokemonHandler();
    }

    render() {
        const pokemon = this.state.pokemonView;
        let vistaModal = <p>Sin pokemones </p>
        let pokedex = Object.keys(this.props.PokeList)
            .reverse().map(igkey => {
                return [...Array(this.props.PokeList[igkey])].map((p, i) => {
                    //console.log(igkey,this.props.PokeList.length);
                    return <Au key={igkey}>
                        <Pokemon datos={p} Show={this.modalView} PokemonView={this.pokemonShow} />
                    </Au>
                });
            });

        if (this.state.modalView) {
            vistaModal = <div className="PokemonView">
                <h1>{pokemon.name}</h1>
                <div className="Silueta">
                    <img src={pokemon.imgFron} alt={pokemon.name} />
                    <img src={pokemon.imgBack} alt={pokemon.name} />
                </div>
                
                <Tipos tipos={pokemon.tipos} />
                <div>
                    <h2>Peso</h2>
                    <h2>Altura</h2>
                    <br></br>
                    <p className="date">{pokemon.peso} kg</p>
                    <p className="date">{pokemon.altura} mts</p>
                </div>
                <Habilidad modal={this.state.modalView} habi={pokemon.habi} />

                <h3>Estadisticas base</h3>
                <Estadisticas modal={this.state.modalView} stats={pokemon.stats} />
            </div>
        }

        return (
            <div>
                <h1>Lista de pokemons: <strong> {this.props.Region} </strong> </h1>
                {pokedex}
                <Modal
                    show={this.state.modalView}
                    modalClosed={this.modalPokemonHandler}>
                        {vistaModal}

                </Modal>
            </div>
        );
    }
}

export default PokemonList;