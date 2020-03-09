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
      gene: 1,

    };

    this.handlerClickGeneration = this.handlerClickGeneration.bind(this);
  }

  componentDidMount() {
    axiosPoke.get('/generation/' + this.state.gene + '/')
      .then(reponse => {
        console.log(reponse.data);
        this.setState({ pokeList: reponse.data.pokemon_species });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handlerClickGeneration(ge) {
    this.setState({ gene: ge });
    //this.componentDidMount();
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
          {this.state.gene}
          <Button variant="outlined" onClick={() => this.handlerClickGeneration(1)}> Generacion I</Button>
          <Button variant="outlined" onClick={() => this.handlerClickGeneration(2)}> Generacion II</Button>
        </Grid>
        <PokemonList PokeList={this.state.pokeList} />
      </div>
    );
  }
}

export default App;
