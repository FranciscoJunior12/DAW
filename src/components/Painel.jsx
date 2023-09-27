import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/EstadoGlobal';

import '../components/styles/ToDoList.css'
import ListItem from './ListItem';

function Painel() {


    const { books, setBooks } = useContext(ThemeContext)

    return (
        <div>
           
            <h1>Painel Usuário</h1>
            {books.length === 0 ? (
                <p style={{ color: 'red' }}>Livro não disponível no momento</p>
            ) : (
                <ul className='lista'>
                    {books.map((book) => (
                        <ListItem book={book} className="flex" handleToggleRead={handleToggleRead} />
                    ))}
                </ul>
            )}
        </div>
    );

    function handleToggleRead(bookId) {
        // Encontre o livro com base no ID e atualize o estado de leitura
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === bookId ? { ...book, isRead: !book.isRead } : book
            )
        );
    }
}

export default Painel;
