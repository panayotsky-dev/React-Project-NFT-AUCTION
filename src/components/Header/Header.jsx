import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Logo from '../Logo/Logo';



// import withStyles from '@material-ui/core/styles';

// const [searchInput,setSearchInput] = useState(null)
// data
// let data = [];
// const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value)
// }
// searchInput.length > 0 ? data.filter ((data) =>{ return data.name.match(searchInput)}) : ""
// if(searchInput.length > 0){
//     data.filter((data)=> {
//         return data.name.match(searchInput)
//     })
// }


function Header() {
  return (
  <>      
    <Grid container spacing={6}>
        <Grid item xl>
        <Logo />
        </Grid>
        <Grid item xl>
        <TextField
          id="outlined-helperText"
          label="Search bar"
          defaultValue=""        
        />           
        </Grid>
        <Grid item xs>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        </Grid>
    </Grid> 
    </>
  )
}

export default Header