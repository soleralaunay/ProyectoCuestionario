
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";

function Pregunta3() {
    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="SI" />
                    <FormControlLabel value="male" control={<Radio />} label="NO" />
                </RadioGroup>
            </FormControl>
        </div>
    )

}

export default Pregunta3;