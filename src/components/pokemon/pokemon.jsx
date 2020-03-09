import React, { Component } from 'react';

import axiosPoke from '../../axios/axios-poke';

class Pokemon  extends Component {

    constructor(props){
        super(props);

        this.state ={
            pokemon: [],
        };
    }
    
    componentDidMount() {
        axiosPoke.get('/pokemon/' + this.props.datos.name + '/')
          .then(reponse => {
            console.log(reponse.data);
            this.setState({ pokemon: reponse.data });
          })
          .catch(error => {
            console.log(error);
          });
      }

    render(){
        return(
            <div className="Pokemon">
                {/* <img src={this.state.pokemon.sprites.front_default} alt=""/> */}
                <p>{this.state.pokemon.name}</p>

            </div>
       );
    }
}

export default Pokemon;