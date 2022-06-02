import "./index.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header(props) {
  
  const [relativeAddress, setRelativeAddress] = React.useState('')

  useEffect(()=>{
    console.log(relativeAddress);
    let address = props;
    console.log(address);
    setRelativeAddress('oi');
    console.log(relativeAddress);
  }, [])

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
        <Link to="/cursos/engenharia_da_computacao" style={{textDecoration:'none'}}>
        <MenuItem
        sx={{
          backgroundColor:'#ce0303',
          color: 'white',
        }} 
        onClick={handleClose}>Computação</MenuItem>
        </Link>
        <Link to="/cursos/engenharia_mecanica" style={{textDecoration:'none'}}>
        <MenuItem
        sx={{
          backgroundColor:'#ce0303',
          color: 'white',
        }} 
        onClick={handleClose}>Mecânica</MenuItem>
        </Link>
        <Link to="/cursos/engenharia_mecatronica" style={{textDecoration:'none'}}>
        <MenuItem
        sx={{
          backgroundColor:'#ce0303',
          color: 'white',
        }}  
        onClick={handleClose}>Mecatrônica</MenuItem>
        </Link>
      </Menu>
      <Link to="/cursos/administracao" style={{textDecoration:'none'}}>
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
      <Link to="/cursos/economia" style={{textDecoration:'none'}}>
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
      <Link to="/cursos/ciencia_da_computacao" style={{textDecoration:'none'}}>
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
  