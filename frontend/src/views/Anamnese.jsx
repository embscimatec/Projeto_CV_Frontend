import React from 'react';
import {Paper,  Grid, Container, Box, Typography} from '@material-ui/core/';
import Header from "../components/Header"
import AnamneseComp from "../components/Anamnese"
const styles = {
    Paper:{
        height:'3700px',
        marginTop:76,
        borderRadius:35,
    },
    Container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    }
}
export default function Anamnese() {
    document.body.style = 'background: #6CA5C2' 
return (
    <>
    <Header/>
    <Grid  container direction="row" justify="flex-start">
            <Grid style={{marginTop:53}} item lg={3} xl={3}>
                <hr style={{width:'700px',color:"#ffffff"}} />
            </Grid>
            <Grid style={{paddingLeft:70,marginTop:30, textAlign:'center'}} item lg={5} xl={5}>
                <Typography style={{color:"#ffffff",fontSize:48}}>
                    ANAMNESE
                </Typography>
            </Grid>
            <Grid style={{marginTop:53}} item lg={3} xl={3}>
                <hr style={{width:'700px',color:"#ffffff"}} />
            </Grid>
        </Grid>
    <Container>
        <Paper style={styles.Paper}>
            <Container style={styles.Container}>
            <AnamneseComp />
            </Container>
        </Paper>
    </Container>
    </>
)
}