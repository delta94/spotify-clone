import React from 'react';
import './PillMenu.scss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ArrowDropDown } from '../icons';

interface Props {
  className?: string | undefined;
  Text: string | undefined;
}

const PillMenu: React.FC<Props> = ({ className, Text }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        className={`pill-menu ${className || ''}`}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img className="pill-menu-img" alt="avatar" src="https://via.placeholder.com/28" />
        <span className="pill-menu-text">{Text || ''}</span>
        <ArrowDropDown className="pill-menu-drop-down-icon" />
      </button>
      <ThemeProvider theme={darkTheme}>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className="pill-menu-list"
        >
          <MenuItem onClick={handleClose}>Account</MenuItem>
          <MenuItem onClick={handleClose} divider>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </ThemeProvider>
    </>
  );
};

export default PillMenu;
