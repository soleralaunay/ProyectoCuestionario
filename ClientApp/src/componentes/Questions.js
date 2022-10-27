import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";

import SignUp from "./SignUp";
import { useEffect, useState } from "react";
import Pregunta1 from "./Preguntas/Pregunta1";
import Pregunta2 from "./Preguntas/Pregunta2";
import Pregunta3 from "./Preguntas/Pregunta3";

function Questions() {

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
        mostrarPreguntas();
    }, []);

    console.log(preguntas[0].id);
}

export default Questions;
