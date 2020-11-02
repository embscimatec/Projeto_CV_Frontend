import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Box,  Grid} from '@material-ui/core/';
import '../../src/css/Home.css'
const styles={
    box1:{
        marginTop:106,
        backgroundColor:"#A2F7F1",
        height:367
    },
    box2:{
        marginTop:'60px',
        backgroundColor:"#A2F7F1",
        height:470
    },
    box3:{
        marginTop:'60px',
        backgroundColor:"#A2F7F1",
        height:656
    },
    hr:{
        paddingTop:'60px',
    }
};

function Home  (){
return(
    <>
     <Navbar/>
     <Grid container direction={'column'}>
        <Grid item xs={12}>
            <Box style={styles.box1}>

            </Box>
        </Grid>
        
        <Grid style={styles.hr} item xs={12}>
            <hr className='hr2'/>
        </Grid>

        <Grid item xs={12}>
            <Box style={styles.box2}>
                
            </Box>
        </Grid>

        <Grid style={styles.hr} item xs={12}>
            <hr className='hr2'/>
        </Grid>

        <Grid item xs={12}>
            <Box style={styles.box3}>
                
            </Box>
        </Grid>
     </Grid>
     <Footer/>
    </>

)
}
export default Home;