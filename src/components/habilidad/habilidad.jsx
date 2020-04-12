import React from 'react';

import Au from '../utils/au/au';

const habilidad = (props) => {

    let habilidades = <p> Sin habilidades </p>
    if (props.modal) {    

        habilidades = Object.keys(props.habi)
        .reverse().map(igkey => {
            return [...Array(props.habi[igkey])].map((h, _) => {
                return <Au key={igkey}>
                    <p className="habi"><strong>Habilidad { h.is_hidden ? "Oculta" : ""}: </strong> {h.ability.name} </p>
                </Au>
            });
        });
    }

    return habilidades
};

export default habilidad;