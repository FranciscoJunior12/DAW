import { useEffect, useState } from "react"


const CicloDeVida = () => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log('Componente montado e pronto para ser renderizado.');

        return () => {
            console.log('Desmontando componente.');
        };
    });



    return (
        <>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </>

    )

}

export default CicloDeVida;