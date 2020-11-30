import React from 'react';
import { Grid, Container, Box, Typography, Button, TextField, Paper } from '@material-ui/core/';
import Header from "../components/Header"
import "../css/Naoencontrado.css"
const styles={
    box:{
        height:960, width:"80%" ,backgroundColor:"#ADBEC7",marginTop:50, display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    text:{
        fontSize:50,
        textAlign:"center",
        marginTop:60
    },
    cpf:{
        width:"80%",
        marginTop:300
    },
    button: {
        width: "350px",
        height:'55px',
        background:"#78D1FF",
        color:"#fff",
        borderRadius:15,
        cursor:'pointer',
        marginBottom:40,
        marginTop:177
    },
    texto:{
        fontSize:25,
        paddingTop:9,
        textAlign:"center"
    },
}
export default function Naoencontrado() {


  
    document.body.style = 'background: #ADBEC7'
    return (
        <>
        <Header/>
        <Container style={styles.container}>

        <Box className="naoEncontrado" style={styles.box}>
            <Typography className="semrosto" style={styles.text}>
                Rosto não encontrado :/
            </Typography>
            <TextField label="Digite o seu CPF aqui" style={styles.cpf} variant="outlined"/>
            <Paper  variant="contained" style={styles.button}><Typography style={styles.texto}>Acessar Paciente</Typography></Paper>
           
        </Box>
        </Container>
        
        </>
    )
}