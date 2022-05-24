import "./index.css";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    return (
        <div className="login-content">
            <img src="logo-insper.png"/>
            <TextField id="email-basic" label="E-mail" variant="email"></TextField>
            <TextField id="senha-basic" label="senha" variant="senha"></TextField>
        </div>
    );
}
  
export default Login;