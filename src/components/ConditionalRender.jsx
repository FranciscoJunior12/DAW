
import React from 'react'

const CondicionalRender = ({ isLoged }) => {
    return (
        <div>
            <h2>Login</h2>

            {isLoged ? <h3>Usuário está logado </h3> : <h3>Usuário não logado</h3>}

        </div>
    )
}

export default CondicionalRender;