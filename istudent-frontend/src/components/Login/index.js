import "./index.css";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";


function Login() {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [loginError, setLoginError] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const submitData = () => {
        axios
        .post("http://127.0.0.1:8000/api/token/", {
            "username": emailLogin,
            "password":passwordLogin
            })
        .then((response) => console.log(response.data.token))
        .catch((error) => setLoginError(true))
    }

    return (
        <div className="login-content">
            <Paper elevation={20} sx={{height: 330, width: 300, backgroundColor: 'white'}}>
                <div className="img-area">
                    <img src="logoIstudents.png" className="login-logo"/>
                </div>
                <div className="text-email">
                    <TextField id="email-basic" label="E-mail" onChange={(event) => setEmailLogin(event.target.value)}></TextField>
                </div>
                {/* <div className="text-senha">
                    <TextField id="senha-basic" type="password" label="senha" onChange={(event) => setPasswordLogin(event.target.value)}></TextField>
                </div> */}
                {loginError==true?(
                    <div>
                        <div className="text-senha2">
                        <TextField id="senha-basic" type="password" label="senha" onChange={(event) => setPasswordLogin(event.target.value)}></TextField>
                        </div>
                        <div className="bottom-login">
                            Erro de Login, tente novamente
                            <div className="text-login2">
                                <Link to="/signup" style={{textDecoration:'none'}}>
                                <Button sx={{color: 'black', fontWeight: 'bold', backgroundColor:'white', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}}>Cadastre-se</Button>
                                </Link>
                                <Button onClick={submitData}sx={{color: 'white', fontWeight: 'bold', backgroundColor:'#ce0303', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}}>LogIn</Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="text-senha">
                            <TextField id="senha-basic" type="password" label="senha" onChange={(event) => setPasswordLogin(event.target.value)}></TextField>
                        </div>
                        <div className="text-login">
                            <Link to="/signup" style={{textDecoration:'none'}}>
                            <Button sx={{color: 'black', fontWeight: 'bold', backgroundColor:'white', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}}>Cadastre-se</Button>
                            </Link>
                            <Button onClick={submitData}sx={{color: 'white', fontWeight: 'bold', backgroundColor:'#ce0303', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}}>LogIn</Button>
                        </div>
                    </div>
                )}
            </Paper>
        </div>
    );
}
  
export default Login;