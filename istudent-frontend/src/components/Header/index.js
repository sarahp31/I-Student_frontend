import "./index.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
      <img src="logo-insper.png"/>
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
        <MenuItem
        sx={{
          backgroundColor:'red',
          color: 'white',
        }} 
        onClick={handleClose}>Computação</MenuItem>
        <MenuItem
        sx={{
          backgroundColor:'red',
          color: 'white',
        }} 
        onClick={handleClose}>Mecânica</MenuItem>
        <MenuItem
        sx={{
          backgroundColor:'red',
          color: 'white',
        }}  
        onClick={handleClose}>Mecatrônica</MenuItem>
      </Menu>
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
      <Button
      sx={{ 
        color: 'white',
        fontWeight: 'bold',
        backgroundColor:'red',
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
      

    </div>
  );
  }
export default Header;
  