import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";

function Pregunta1() {
    return (
        <FormControl>
            <FormLabel id="demo-form-control-label-placement">
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
            >
                <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="top" />
                <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="top" />
                <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="top" />
                <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="top" />
                <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="top" />
                <FormControlLabel value="6" control={<Radio />} label="6" labelPlacement="top" />
                <FormControlLabel value="7" control={<Radio />} label="7" labelPlacement="top" />
                <FormControlLabel value="8" control={<Radio />} label="8" labelPlacement="top" />
                <FormControlLabel value="9" control={<Radio />} label="9" labelPlacement="top" />
                <FormControlLabel value="10" control={<Radio />} label="10" labelPlacement="top" />


            </RadioGroup>
        </FormControl>
    )
}

export default Pregunta1;