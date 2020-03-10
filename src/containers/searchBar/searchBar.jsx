import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class SearchBar extends Component {

    render() {
        return (
            <div className="SearchBar">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <FormControl className="Search_Form" fullWidth variant="outlined" color="secondary">
                        <InputLabel htmlFor="outlined-adornment-amount">Buscador pokemón</InputLabel>
                        <OutlinedInput
                            onChange={this.props.Buscar}
                            id="outlined-adornment-amount"
                            labelWidth={140}
                        />
                    </FormControl>
                </Grid>
            </div>
        );
    }
}

export default SearchBar;
