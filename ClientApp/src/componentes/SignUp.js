import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleClick = () => {
        if (email == "email") {
            navigate("/questions");
        }
    };

    return (
        <Paper
            style={{
                display: "flex",
                margin: "10px auto",
                padding: "20px 15px",
                width: 700,
                height: 300,
                flexWrap: "wrap",
                textAlign: "center",
                flexDirection: "column",
            }}
        >
            <h2>Log In</h2>
            <p>Inroduzca su email</p>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmail}

            />
            <Button
                style={{ marginTop: "0px", marginLeft: "0px", height: "10%" }}
                variant="contained"
                onClick={handleClick}

            >
                Submit
            </Button>
        </Paper>
    );
}

export default SignUp;