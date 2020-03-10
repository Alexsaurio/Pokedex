import React, { Component } from 'react';

import SearchBar from '../containers/searchBar/searchBar';
import PokemonList from '../containers/pokemonList/pokemonList';
import axiosPoke from '../axios/axios-poke';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeList: [],
      pokeSearch: [],
      region: "Sin region",
    };

    this.handlerClickGeneration = this.handlerClickGeneration.bind(this);
  }

  componentDidMount() {
    this.handlerClickGeneration(1);
  }

  handlerClickGeneration(gen) {
    axiosPoke.get('/generation/' + gen + '/')
    //axiosPoke.get('/generation/' + gen + '/')
      .then(reponse => {
        this.setState({ 
          pokeList: reponse.data.pokemon_species,
          pokeSearch: reponse.data.pokemon_species,
          region: reponse.data.main_region.name
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    const { value } = event.target;

    let pokeSearch = [];
    this.state.pokeSearch.forEach((pokemon) => {
       if (pokemon.name.indexOf(value) !== -1) {
         pokeSearch.push(pokemon);
         return;
       }
    });
    this.setState({ 
      pokeList: pokeSearch
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar Buscar={e => this.handleInputChange(e)}/>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Button variant="outlined" onClick={() => this.handlerClickGeneration(1)}> Generacion I</Button> 
          <Button variant="outlined" onClick={() => this.handlerClickGeneration(2)}> Generacion II</Button>
          <Button variant="outlined" onClick={() => this.handlerClickGeneration(3)}> Generacion III</Button>
        </Grid>
        <PokemonList Region={ this.state.region } PokeList={this.state.pokeList} />
      </div>
    );
  }
}

export default App;
