import React from 'react';

import Au from '../utils/au/au';

const estadisticas = (props) => {

    let estadisticas = <p> Sin Estadisticas </p>
    if (props.modal) {    

        estadisticas = Object.keys(props.stats)
        .reverse().map(igkey => {
            return [...Array(props.stats[igkey])].map((s, _) => {
                console.log(s);
                return <Au key={igkey}>
                    <p className="stat"> <strong>{ s.stat.name }: </strong> {s.base_stat} </p>
                </Au>
            });
        });
    }

    return estadisticas
};

export default estadisticas;