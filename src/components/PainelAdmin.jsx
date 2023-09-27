import React, { useContext, useState } from 'react'
import './styles/ToDoList.css'
import { ThemeContext } from '../context/EstadoGlobal'




const PainelAdmin = () => {

    const [value, setValue] = useState("")

    const { books, setBooks } = useContext(ThemeContext)

    const handleForm = (e) => {

        e.preventDefault();

        if (!value) return

        const newTasks = [...books, {
            id: Math.floor(Math.random() * 10000),
            title: value
        }]

        setBooks(newTasks);
        setValue('')
    }


    const removeTask = (id) => {

        const newTasks = [...books];
        const filterdTasks = newTasks.filter((book) => {

            return book.id !== id ? book : null;
        });

        setBooks(filterdTasks)
        console.log(filterdTasks)
    }




    return (
        <div className="container margin">
            <h1>Painel Admin</h1>
            <form onSubmit={handleForm}>
                <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Digite um novo livro" />

                <button>Add</button>

            </form>

            <ul className='lista'>
                {books.length > 0 && books.map((book) => (
                    <li className="task" key={book.id}>
                        <p>{book.title}</p>
                        <button onClick={() => { removeTask(book.id) }}>X</button>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default PainelAdmin