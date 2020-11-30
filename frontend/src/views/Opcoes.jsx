import React from 'react';
import { Paper, Grid, Container, Box, Typography, Button } from '@material-ui/core/';
import Header from "../components/Header"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((themes) => ({
    botao:{
        '@media (min-width: 1920px)':{
            marginLeft:300,
        },
        '@media (max-width: 1280px)':{
            marginLeft:126,
        },
        '@media (max-width: 960px)':{
            marginLeft:0,
        },
        
    }
}))
function Opcoes() {
    const classes = useStyles();
    const styles = {
        paper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            textAlign: "center",
            height: "100%",
            width: "100%",
            marginTop: "10%",
            borderRadius: "50px"
        },
        container: {
            height: "80vh",
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
        },
        button: {
            width: "350px",
            height:'55px',
            background:"#426D83",
            color:"#fff",
            borderRadius:40,
            cursor:'pointer'
        },
        escolha:{
            height: "50px",
            background:"#426D83",
            color:"#fff",
            width:"100%", 
            marginBottom:70, 
            marginTop:88,
            borderRadius:10
        },
        paper2:{
            height: "550px",
            width: "954px",
            marginTop: "88px",
            borderRadius: "50px"
        },
        texto:{
            fontSize:25,
            paddingTop:5,
            textAlign:"center"
        }
    }
    document.body.style = 'background: #6CA5C2'
    return (
        <>
        <Header/>
            <Container style={styles.container} maxWidth="lg">

                <Paper style={styles.paper2} elevation={3}>
                    <div style={styles.escolha}>
                        <Typography style={{...styles.texto, fontWeight:'bold'}}>Escolha uma das opções abaixo:</Typography>
                    </div>
                    <Grid container justify="center">
                    <Grid xl={12} lg={12} style={{marginBottom:39}} item>
                        <Paper className={classes.botao} variant="contained" style={styles.button}><Typography style={styles.texto}>Acessar Paciente</Typography></Paper>
                    </Grid>
                    <Grid xl={12} lg={12} style={{marginBottom:39}} item>
                        <Paper className={classes.botao} variant="contained" style={styles.button}> <Typography style={styles.texto}>Cadastrar Paciente </Typography></Paper>
                    </Grid>
                    
                    <Grid xl={12} lg={12} item>
                        <Paper className={classes.botao} variant="contained" style={styles.button}><Typography style={styles.texto}> Cadastrar Administrador </Typography></Paper>
                    </Grid>
                    </Grid>

                </Paper>
            </Container>
        </>
    )
}

export default Opcoes;