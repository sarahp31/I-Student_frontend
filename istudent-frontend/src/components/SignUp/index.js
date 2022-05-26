import "./index.css";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function SignUp() {
    return (
        <div className="signup-content">
            <Paper elevation={20} sx={{height: 430, width: 300, backgroundColor: 'white'}}>
                <div className="img-area-signup">
                    <img src="logoIstudents.png" className="signup-logo"/>
                </div>
                <div className="text-email-signup">
                    <TextField id="email-basic" label="E-mail"></TextField>
                </div>
                <div className="text-senha-signup">
                    <TextField id="senha-basic" label="senha"></TextField>
                </div>
                <div className="senha-confirm-signup">
                    <TextField id="senha-basic" label="confirmação senha"></TextField>
                </div>
                <div className="text-signup">
                    <Button sx={{color: 'white', fontWeight: 'bold', backgroundColor:'#ce0303', borderRadius: 4.5,textTransform: 'none', border: 3, borderColor:'#ce0303'}}>Cadastrar</Button>
                </div>
            </Paper>
        </div>
    );
}
  
export default SignUp;