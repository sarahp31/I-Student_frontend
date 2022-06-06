import "./index.css";
import axios from "axios";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';


function SignUp() {

    let navigate = useNavigate();

    const [emailSingUp, setEmailSingUp] = useState('');
    const [passwordSingUp, setPasswordSingUp] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [userExists, setUserExists] = useState(false);

    const submitData = () => {
        let emailDomain = emailSingUp.split("@")[1];
    
        if (passwordSingUp === passwordConfirm && (emailDomain == "al.insper.edu.br")){
            axios
            .post("http://127.0.0.1:8000/api/create_account/", {
                "username": emailSingUp,
                "password":passwordSingUp,
                })
            .then((response) => {
                navigate("/login");
                setUserExists(true)
            })
            .catch((error) => setUserExists(true))
        }
        else{
            setUserExists(true)
        }
    }

    return (
        <div className="signup-content">
            <Paper elevation={20} sx={{height: 430, width: 300, backgroundColor: 'white'}}>
                <div className="img-area-signup">
                    <Link to="/" style={{textDecoration:'none'}}>
                    <img src="logoIstudents.png" className="signup-logo"/>
                    </Link>
                </div>
                {userExists==false?(
                    <div>
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
                            <Button onClick={submitData} sx={{color: 'white', fontWeight: 'bold', backgroundColor:'#ce0303', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}} >Cadastrar</Button>
                        </div>
                    </div>
                    
                ):(
                    <div>
                        <div className="text-email-signup">
                            <TextField error id="email-basic" label="E-mail" onChange={(event) => setEmailSingUp(event.target.value)}></TextField>
                        </div>
                        <div className="text-senha-signup">
                            <TextField error id="senha-basic" label="senha" onChange={(event) => setPasswordSingUp(event.target.value)}></TextField>
                        </div>
                        <div className="senha-confirm-signup">
                            <TextField error helperText="Problema de Cadastro" id="senha-basic" label="confirmação senha" onChange={(event) => setPasswordConfirm(event.target.value)}></TextField>
                        </div>
                        <div className="text-signup">
                            <Button onClick={submitData} sx={{color: 'white', fontWeight: 'bold', backgroundColor:'#ce0303', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}} >Cadastrar</Button>
                        </div>
                    </div>
                )}
            </Paper>
        </div>
    );
}
  
export default SignUp;