import React, { Component } from 'react';

import Pokemon from '../../components/pokemon/pokemon';
import Au from '../../components/utils/au/au';
import Modal from '../../components/utils/modal/modal';

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

    pokemonShow = (e, pokemon, imagen) => {

        this.setState({ pokemonView: {
            name: pokemon.name,
            img: imagen
        } });
        console.log(this.state.pokemonView);
        this.modalPokemonHandler();
    }

    render() {
        const pokemon = this.state.pokemonView;
        let pokedex = Object.keys(this.props.PokeList)
            .reverse().map(igkey => {
                return [...Array(this.props.PokeList[igkey])].map((p, _) => {
                    return <Au key={igkey}>
                        <Pokemon datos={p} Show={this.modalView} PokemonView={this.pokemonShow} />
                    </Au>
                });
            });

        return (
            <div>
                <h1>Lista de pokemons: <strong> {this.props.Region} </strong> </h1>
                {pokedex}
                <Modal
                    show={this.state.modalView} 
                    modalClosed={this.modalPokemonHandler}>

                    <div className="PokemonView">
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.img} alt={pokemon.name}/>

                    </div>

                </Modal>
            </div>
        );
    }
}

export default PokemonList;