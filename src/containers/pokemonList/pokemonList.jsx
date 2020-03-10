import React, { Component } from 'react';

import Pokemon from '../../components/pokemon/pokemon';
import Au from '../../components/utils/au/au';

class PokemonList extends Component {
    
    render(){
        
        let pokedex = Object.keys(this.props.PokeList)
        .map( igkey => {
            return [...Array(this.props.PokeList[igkey])].map( (p,_) => {
                return <Au key={igkey}>
                    <Pokemon datos={p} />
                </Au>
            });
        });
           
        return(
            <div>
                <h1>Lista de pokemons: <strong> {this.props.Region} </strong> </h1>
                { pokedex }
            </div>          
        );
    }
}

export default PokemonList;