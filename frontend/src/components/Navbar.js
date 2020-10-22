import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core/';
import logo from "../../src/img/embs1.png"
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
        paddingLeft:40
    },
    texto:{
        fontSize:30,
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
            <Grid style={styles.hr} item xs={1}>
                <hr color='#000000' className='hr'/>
            </Grid>
            <Grid container justify='center' item xs={1}>
                <img src={usuario}/>
            </Grid>
            <Grid  item xs={2}>
                <Typography style={styles.texto}>
                    Login
                </Typography>
            </Grid>
       </Grid>
   </Grid>
   </Paper>
    </>
)
}
export default Navbar;