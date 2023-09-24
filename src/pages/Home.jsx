import { useContext } from "react";
import Header from "../layout/Header";
import { ThemeContext } from "../context/ThemeContext";


const Home = () => {


    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>

            <h1>Pagina inicial</h1>
            <p>Esta pagina esta com tema  {theme}</p>
            <button onClick={toggleTheme}>Mudar tema</button>
        </>
    )
}

export default Home;