import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PortalView from './portalview'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SalesPortal(props) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [menuSelected, setMenuSelected] = React.useState("");

  const isMenuOpen = Boolean(anchorEl);
  const isSalesMenuOpen = Boolean(anchorE2);

  const handleAddQuoteMenu = () => {
      setMenuSelected("addQuote");
      handleSalesMenuClose();
    };
    
  const handleViewQuotesMenu = () => {
      setMenuSelected("viewQuote");
      handleSalesMenuClose();
      props.handleViewQuotes(props.userName);
    };   

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    
    const handleSalesMenuOpen = (event) => {
      setAnchorE2(event.currentTarget);
      };
    const handleSalesMenuClose = () => {
      setAnchorE2(null);
      };
    
    const accountMenuId = 'sales-account-menu';
    const renderAccountMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={accountMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={props.signOut}>SignOut</MenuItem>
        </Menu>
      );
    
    const salesMenuId = 'sales-menu';
    const renderSalesMenu = (
        <Menu
          anchorE1={anchorE2}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          id={salesMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={isSalesMenuOpen}
          onClose={handleSalesMenuClose}
        >
          <MenuItem onClick={handleAddQuoteMenu}>Add Quote</MenuItem>
          <MenuItem onClick={handleViewQuotesMenu}>My Quotes</MenuItem>
        </Menu>
      );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                aria-controls={salesMenuId}
                aria-haspopup="true"
                onClick={handleSalesMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sales Portal
            </Typography>
            <Typography variant="h6" className={classes.title} align="right">
              {props.userName}
            </Typography>
            <IconButton
                edge="end"
                aria-controls={accountMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
            </IconButton>        
          </Toolbar>
        </AppBar>
        {renderAccountMenu}
        {renderSalesMenu}
        <PortalView 
          menuSelected={menuSelected} 
          handleAddQuote={props.handleAddQuote}/>
      </div>
    );
  }
