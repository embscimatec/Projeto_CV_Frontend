import React from 'react';
import { Paper, Grid, Container, Box, Typography, Button } from '@material-ui/core/';
import Header from "../components/Header"
function Opcoes() {
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
            cursor:'pointer',
            marginBottom:40
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
        },
        Container2:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
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
                    <Container style={styles.Container2}>
                        <Paper  variant="contained" style={styles.button}><Typography style={styles.texto}>Acessar Paciente</Typography></Paper>
                        <Paper variant="contained" style={styles.button}> <Typography style={styles.texto}>Cadastrar Paciente </Typography></Paper>
                        <Paper variant="contained" style={styles.button}><Typography style={styles.texto}> Cadastrar Administrador </Typography></Paper>
                    </Container>
                </Paper>
            </Container>
        </>
    )
}

export default Opcoes;