import React from 'react';
import {Paper,  Grid,  Typography, TextField} from '@material-ui/core/';
const styles = {
    grid:{
        paddingTop:37
    },
    email:{
        marginLeft:236, 
        width:'624px'
    },
    senha:{
        marginTop:55,
        marginLeft:236,
        width:'624px'
    },
    paper:{
        borderRadius:'15px',
        height:'42px',
        backgroundColor:'#1F7A74',
        color:'#ffffff',
        marginTop:14,
        marginLeft:236,
        width:'196px'
    },
    entrar:{
        paddingTop:'3px',
        fontSize:'24px',
        paddingLeft:'62px'
    },
    esqueci:{
        paddingTop:'13px',
        fontSize:'24px',
        paddingLeft:'90px'
    }

}
function Login  (){
    return (
        <>
        <Grid container direction="column" style={styles.grid}>
            <Grid item xl={12}>
                <TextField label="Email"  style={styles.email} variant="outlined"/>
            </Grid>
            <Grid item xl={12}>
                <TextField type='password' label="Senha" style={styles.senha} variant="outlined"/>
            </Grid>
            <Grid container>
                <Grid item  xl={6}>
                    <Paper elevation={3} style={styles.paper} >
                      <Typography  style={styles.entrar}>
                        Entrar
                      </Typography>
                    </Paper>
                </Grid>
                <Grid item  xl={6}>
                    <Typography style={styles.esqueci}>
                        Esqueci minha senha
                    </Typography>
                </Grid>
            </Grid>
            
        </Grid>
        </>
        )
    }
export default Login;