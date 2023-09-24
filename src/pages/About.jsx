import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../layout/Header";

const About = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>

            <h1>Estou na page about</h1>
            <p>Esta pagina esta com tema  {theme}</p>
            <button onClick={toggleTheme}>Mudar tema</button>
        </>
    )
}

export default About;