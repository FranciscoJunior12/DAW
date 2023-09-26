

import React, { useEffect, useState } from 'react'

const LifeCycle = () => {

    const [name, setName] = useState('Francisco');

    const haldleClick = () => {

        setName(name === 'Francisco' ? "Domingos" : "Francisco");

    }

    //somente quando inicializado
    useEffect(() => {
        console.log('componente montado')
    }, []);

    //sempre que tiver alteracoa 
    useEffect(() => {
        console.log('componente actualizado')

    }, [name]);

    // sempre que tiver alteracao e inicializado
    useEffect(() => {
        console.log('componente Desmontado')

    });

    console.log('Render');
    return (
        <div>
            <h2>{name} junior utilizando hook useEffect "Life cycle".</h2>
            <button onClick={haldleClick}>Alterar nome</button>
        </div>
    )
}

export default LifeCycle;