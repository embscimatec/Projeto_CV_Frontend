import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core/';
import logo from "../../src/img/embs1.png"
import line from "../../src/img/Line.svg"
import usuario from "../../src/img/usuario.svg"
import '../../src/css/Navbar.css'
const styles = {
    paper:{
        backgroundColor:'#1F7A74',
        height:87
    },
    logo:{
        paddingLeft:122
    },
    grid:{
        paddingTop:15
    },
    hr:{

    },
    texto:{
        fontSize:30,
        color:'black',
    }
}
function Navbar  (){
return(
    <>
   <Paper elevation={10} style={styles.paper}>
   <Grid style={styles.grid} alignItems="center" justify="space-between" container>
       <Grid style={styles.logo} item xs={2}>         
            <img src={logo}/>
       </Grid>
       <Grid  container direction='row' justify='flex-end' alignItems="center" item xs={6}>         
            <Grid  container justify='flex-end' item xs={2}>
               <img src={line}/>
                <a href='/login'>
                <img style={{ paddingLeft:20,paddingRight:10, marginTop:10}} src={usuario}/>
                </a>
            </Grid>
            <Grid style={{marginRight:100, marginTop: 2}} item xs={1}>
                <a href='/login' style={{textDecoration:'none'}}>
                <Typography style={styles.texto}>
                    Login
                </Typography>
                </a>
            </Grid>
       </Grid>
   </Grid>
   </Paper>
    </>
)
}
export default Navbar;