import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

 function LanguageDropdown(props) {
 
const {open,handleClose,anchorEl}=props
  return (
    <div>
      {/* <Button variant='contained'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       
      >
        Dashboard
      </Button> */}
      <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>ENG</MenuItem>
        <MenuItem onClick={handleClose}>لغة </MenuItem>
        <MenuItem onClick={handleClose}>FRI</MenuItem>
      </Menu>
    </div>
  );
}
export default LanguageDropdown;