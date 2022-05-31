import "./index.css";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";


function SignUp() {

    const [emailSingUp, setEmailSingUp] = useState('');
    const [passwordSingUp, setPasswordSingUp] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    console.log(emailSingUp)
    console.log(passwordSingUp)
    console.log(passwordConfirm)


    // const sendSingUp = (event) => {
    //     event.preventDefault()
    //     axios
    //         .post("", {"email" : emailSingUp, "password": passwordSingUp})
    //         .then((res) => {
    //             setEmailSingUp("");
    //             setPasswordSingUp("");
    //             setPasswordConfirm("");
    //         })
    // }

    // onClick={sendSingUp}


    return (
        <div className="signup-content">
            <Paper elevation={20} sx={{height: 430, width: 300, backgroundColor: 'white'}}>
                <div className="img-area-signup">
                    <img src="logoIstudents.png" className="signup-logo"/>
                </div>
                <div className="text-email-signup">
                    <TextField id="email-basic" label="E-mail" onChange={(event) => setEmailSingUp(event.target.value)}></TextField>
                </div>
                <div className="text-senha-signup">
                    <TextField id="senha-basic" label="senha" onChange={(event) => setPasswordSingUp(event.target.value)}></TextField>
                </div>
                <div className="senha-confirm-signup">
                    <TextField id="senha-basic" label="confirmação senha" onChange={(event) => setPasswordConfirm(event.target.value)}></TextField>
                </div>
                <div className="text-signup">
                    <Button sx={{color: 'white', fontWeight: 'bold', backgroundColor:'#ce0303', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}} >Cadastrar</Button>
                </div>
            </Paper>
        </div>
    );
}
  
export default SignUp;