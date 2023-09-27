import React from 'react'

const ListItem = ({ book, handleToggleRead, className }) => {
    return (
        <li key={book.id} className={className}>
            {book.title} - {book.isRead ? 'Lido' : 'Não lido'}
           
            <button onClick={() => handleToggleRead(book.id)}>
                {book.isRead ? 'Marcar como não lido' : 'Marcar como lido'}
            </button>
            
        </li>
    )
}

export default ListItem