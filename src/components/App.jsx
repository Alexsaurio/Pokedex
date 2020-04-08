import React, { Component } from 'react';

import SearchBar from '../containers/searchBar/searchBar';
import PokemonList from '../containers/pokemonList/pokemonList';
import axiosPoke from '../axios/axios-poke';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeList: [],
      pokeSearch: [],
      region: "Sin region",
      loading: true,
    };

    this.handlerClickGeneration = this.handlerClickGeneration.bind(this);
  }

  componentDidMount() {
    this.handlerClickGeneration(1);
    this.setState({loading:false});
  }

  handlerClickGeneration(gen) {
    this.setState({loading:true});
    axiosPoke.get('/generation/' + gen + '/')
    //axiosPoke.get('/generation/' + gen + '/')
      .then(reponse => {
        this.setState({ 
          pokeList: reponse.data.pokemon_species,
          pokeSearch: reponse.data.pokemon_species,
          region: reponse.data.main_region.name,
          loading: false,
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
    const { loading } = this.state;
    let Lista = <CircularProgress disableShrink color="secondary" />;
    //let Lista = <LinearProgress variant="query" color="secondary" />
    if (!loading) {
      Lista = <PokemonList Region={ this.state.region } PokeList={this.state.pokeList} />
    }
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
        
        {Lista}
      </div>
    );
  }
}

export default App;
