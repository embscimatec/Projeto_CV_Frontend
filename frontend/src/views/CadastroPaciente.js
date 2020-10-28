import React from 'react'
import Header from "../../src/components/Header"
import {Grid, Box, Typography} from '@material-ui/core/';
import '../../src/css/CadastroPaciente.css'
function getPageContent(page){
    switch (page) {
        case 0:
            return(<> </>);
        case 1:
            return(<> </>);
        case 2:
            return(<> </>)
    }
}

function CadastroPaciente  (){
    document.body.style = 'background: #6CA5C2' 
    return(
        <>
        <Header/>
        <Grid  container direction="row" justify="flex-start">
            <Grid style={{marginTop:53}} item xl={4}>
                <hr style={{width:'700px',color:"#ffffff"}} />
            </Grid>
            <Grid style={{paddingLeft:70,marginTop:30}} item xl={4}>
                <Typography style={{color:"#ffffff",fontSize:48}}>
                    CADASTRAR PACIENTE
                </Typography>
            </Grid>
            <Grid style={{marginTop:53}} item xl={4}>
                <hr style={{width:'700px',color:"#ffffff"}} />
            </Grid>
        </Grid>
        <Box className='boxCad' style={{marginTop:'60px',height:'701px', backgroundColor:'#ffffff'}}>
        <Grid style={{paddingTop:53}} item xl={4}>
            </Grid>
        </Box>
        </>
        )
}
export default CadastroPaciente