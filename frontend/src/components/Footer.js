import React from 'react';
import { Grid, Typography, Box, Container} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import insta from "../../src/img/instagram.svg"
import wpp from "../../src/img/wpp.svg"
import ponto from "../../src/img/ponto.svg"
import '../../src/Css/Navbar.css'
const styles = {
    box:{
        backgroundColor:'#29536B',
        height:'286px',
        marginTop:105
    },
    logo:{
        paddingLeft:122
    },
    grid:{
        paddingTop:113
    },
    grid2:{
        paddingTop:50
    },
    hr:{
        marginTop:35
    },
    texto:{
        fontSize:24,
    },
    ponto:{
        paddingLeft:'48px',
        paddingRight:'48px'
    },
    icon:{
        paddingLeft:'5px',
        paddingRight:'5px'
    }
}
function Navbar  (){
return(
    <>
   <Box style={styles.box}>
        <Grid style={styles.grid} alignItems="center" justify="center"  container>
        <a href='https://www.instagram.com/ieeeembscimatec/'>
        <img src={insta}/>
        </a>
        <img style={styles.ponto} src={ponto}/>
        <img src={wpp}/>
        </Grid>
        <hr style={styles.hr} className="hr3"/>
        <Grid style={styles.grid2} alignItems="center" justify="center"  container>
            <Typography style={styles.texto}>
                Made with 
            </Typography>

            <FavoriteIcon style={styles.icon}/>

            <Typography style={styles.texto}>
                by EMBS
            </Typography>
        </Grid>
        
   </Box>
    </>
)
}
export default Navbar;