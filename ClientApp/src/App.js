import { useEffect, useState } from "react"
import { Container } from "reactstrap"
import TablaPreguntas from "./componentes/TablaPreguntas"
import SignUp from "./componentes/SignUp"
import Questions from './componentes/Questions';
import Completed from "./componentes/Completed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    const [preguntas, setPreguntas] = useState([])

    const mostrarPreguntas = async () => {
        const response = await fetch("api/preguntas/Lista");
        if (response.ok) {
            const data = await response.json();
            setPreguntas(data)
        } else {
            console.log("Error al mostrar la lista de preguntas")
        }
    }

    useEffect(() => {
        mostrarPreguntas()

    },[])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/formcompleted" element={<Completed />} />
            </Routes>
        </Router>
        )
}

export default App;