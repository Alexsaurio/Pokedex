import React from 'react';

const tipos = (props) => {

    let tipo1 = "";
    let tipo2 = "";
    let tipos = <p>Sin tipos</p> ;
    if (props.tipos.length === 1) {
      tipo1 = props.tipos[0].type.name;
      tipos = <p> <span className={tipo1}>{tipo1}</span></p>;
    } else if (props.tipos.length === 2) {
      tipo1 = props.tipos[0].type.name;
      tipo2 = props.tipos[1].type.name;
      tipos = <p> <span className={tipo1}>{tipo1}</span> <span className={tipo2}>{tipo2}</span></p>
    }

    return tipos
};

export default tipos;