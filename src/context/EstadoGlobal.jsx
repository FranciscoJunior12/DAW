
import { createContext, useState } from 'react'

export const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    const [perfil, setPerfil] = useState('');

    const [books, setBooks] = useState([
        { id: 1, title: 'joao e maria', isRead: false },
        { id: 2, title: 'Livro de base de dados', isRead: true },
        { id: 3, title: 'Pai rico, pai pobre', isRead: true },

    ]);

    const toggleTheme = () => {

        setTheme(theme === 'dark' ? 'light' : 'dark')
    }




    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, books, setBooks, perfil, setPerfil }}>
            {children}
        </ThemeContext.Provider>
    )
}
