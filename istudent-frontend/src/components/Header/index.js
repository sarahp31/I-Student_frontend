import "./index.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="appbar">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
      </style>
      <Link to="/" style={{textDecoration:'none'}}>
      <img src="logo-insper.png"/>
      </Link>
      <Button
      sx={{ 
        color: 'black',
        textTransform: 'none',
      }}
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
      Engenharias
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }} 
      >
        <Link to="/engenharia_da_computacao" style={{textDecoration:'none'}}>
        <MenuItem
        sx={{
          backgroundColor:'#ce0303',
          color: 'white',
        }} 
        onClick={handleClose}>Computação</MenuItem>
        </Link>
        <Link to="/engenharia_mecanica" style={{textDecoration:'none'}}>
        <MenuItem
        sx={{
          backgroundColor:'#ce0303',
          color: 'white',
        }} 
        onClick={handleClose}>Mecânica</MenuItem>
        </Link>
        <Link to="/engenharia_mecatronica" style={{textDecoration:'none'}}>
        <MenuItem
        sx={{
          backgroundColor:'#ce0303',
          color: 'white',
        }}  
        onClick={handleClose}>Mecatrônica</MenuItem>
        </Link>
      </Menu>
      <Link to="/administracao" style={{textDecoration:'none'}}>
      <Button
      sx={{ 
        color: 'black',
        textTransform: 'none',
      }}
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      // onClick={handleClick}
      >
      Administração
      </Button>
      </Link>
      <Link to="/economia" style={{textDecoration:'none'}}>
      <Button
      sx={{ 
        color: 'black',
        textTransform: 'none',
      }}
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      // onClick={handleClick}
      >
      Economia
      </Button>
      </Link>
      <Link to="/ciencia_da_computacao" style={{textDecoration:'none'}}>
      <Button
      sx={{ 
        color: 'black',
        textTransform: 'none',
      }}
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      // onClick={handleClick}
      >
      Ciência da Computação
      </Button>
      </Link>
      <Link to="/login" style={{textDecoration:'none'}}>
      <Button
      sx={{ 
        color: 'white',
        fontWeight: 'bold',
        backgroundColor:'#ce0303',
        borderRadius: 4.5,
        textTransform: 'none',
      }}
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      // onClick={handleClick}
      >
      Log In
      </Button>
      </Link>
      

    </div>
  );
  }
export default Header;
  