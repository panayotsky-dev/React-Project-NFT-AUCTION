import * as React from "react"; 
import { styled } from "@mui/material/styles"; 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from "../logo/Logo.jsx";
import Buttons from "./Buttons.jsx";
import SearchBar from "./Search.jsx";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import classNames from "classnames"; 
import styles from "./Header.module.scss";

// import styles from "./Header.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#181828',
  textAlign: 'center',
  color: '#fff',
}));



// The @mui/icons-material NPM package must be installed in order to set a search icon in the search input
 
 


export default function Header() {
  return (
    <div className={classNames(styles.wrapper)}>
    
      <Container className={classNames(styles.container)} maxWidth="xl"> 

      <AppBar position="static">

        <Toolbar maxwidth="sm"> 
        <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item><Logo/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><SearchBar/></Item>
        </Grid>
        <Grid item xs>
          <Item><Buttons/></Item>
        </Grid>
      </Grid>
       </Toolbar>
   
      </AppBar>

    </Container> 

</div>
  );
}

