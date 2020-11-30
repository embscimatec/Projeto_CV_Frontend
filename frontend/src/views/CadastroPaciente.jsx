import React, {useState} from 'react'
import Header from "../components/Header"
import DadosPessoais from "../components/cadPacientes/DadosPessoais"
import Contato from "../components/cadPacientes/Contato"
import Processo from "../components/cadPacientes/Processo"
import Emergencia from "../components/cadPacientes/Emergencia"


import {Grid, Box, Typography, Paper} from '@material-ui/core/';
import '../css/CadastroPaciente.css'
function getPageContent(page){
    switch (page) {
        case 0:
            return(
            <> 
                <DadosPessoais/>
            </>);
        case 1:
            return(
            <> 
                <Contato/>
            </>
            );
        case 2:
            return(
            <>
                <Emergencia/> 
            </>)
        default:
            return('');
    }
}
function getBox(page){
    switch (page) {
        case 0:
            return(
            <> 
        <Box className='boxCad' style={{marginTop:'60px',height:'701px', backgroundColor:'#ffffff'}}>
                {getPageContent(page)}
                <Processo valor={page}/>
        </Box>
            </>);
        case 1:
            return(
            <> 
        <Box className='boxCad' style={{marginTop:'60px',height:'701px', backgroundColor:'#ffffff'}}>
                {getPageContent(page)}
                <Processo valor={page}/>
        </Box>
            </>
            );
        case 2:
            return(
            <>
                <Box className='boxCad2' style={{marginTop:'60px',height:'830px', backgroundColor:'#ffffff'}}>
                {getPageContent(page)}
                <Processo valor={page}/>
                </Box> 
            </>)
        default:
            return('')
    }
}
function nextPage(page, setPage){
    if(page<2){
        setPage(page+1);
    }else{
        setPage(0)
    }
}
function getTitulo(page){
    switch(page){
        case 0:
            return "CADASTRAR PACIENTE"
        case 1:
            return "CONTATO DO PACIENTE"
        case 2:
            return "CONT. DE EMERGÊNCIA"
        default:
            return "CADASTRAR PACIENTE"
    }
}
function CadastroPaciente  (){
    const [page, setPage] = useState(0);
    const [altura, setAltura] = useState('701px')
    document.body.style = 'background: #6CA5C2' 
    return(
        <>
        <Header/>
        <Grid  container direction="row" justify="flex-start">
            <Grid style={{marginTop:53}} item lg={3} xl={3}>
                <hr style={{width:'500px',color:"#ffffff"}} />
            </Grid>
            <Grid style={{paddingLeft:70,marginTop:30, textAlign:'center'}} item lg={5} xl={5}>
                <Typography style={{color:"#ffffff",fontSize:48}}>
                    {getTitulo(page)}
                </Typography>
            </Grid>
            <Grid style={{marginTop:53}} item lg={3} xl={3}>
                <hr style={{width:'700px',color:"#ffffff"}} />
            </Grid>
        </Grid>
        {getBox(page)}
        <Grid container justify='center'>
        <Paper onClick={()=>{nextPage(page,setPage)}}style={{borderRadius:15,backgroundColor:"#426D83",marginTop:78,marginBottom:43,cursor:'pointer',width:'375px',height:'75px'}}>
            <Typography style={{color:"#ffffff",paddingTop:5,textAlign:'center', fontSize:48}}>
                PRÓXIMO
            </Typography>
        </Paper>
        </Grid>
        </>
        )
}
export default CadastroPaciente