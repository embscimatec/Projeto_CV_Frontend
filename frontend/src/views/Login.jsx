import React from 'react';
import {Paper,  Grid, Container, Box, Typography} from '@material-ui/core/';
import logo from "../../src/img/embs3.svg"
import camera from "../../src/img/camera.svg"
import LoginComponent from "../components/Login"
import '../css/Login.css'
function Login  (){

    const styles = {
      box: {
        borderRadius:'21px 21px 0px 0px', 
        height:'74px',
        backgroundColor:'#447A76', 
        width:'270px', 
        marginTop:'100px', 
        marginLeft:'720px'
      },
      grid1:{
        marginLeft:'32px'
      },
      grid2:{
        marginLeft:'53px'
      },
      typo:{
        fontSize:'18px'
      },
      paper:{
        width:'1072px', 
        height:'758px', 
        borderRadius:50
      },
      img:{
        marginTop:"100px", 
        marginLeft:'400px'
      }
    }
    document.body.style = 'background: #6CA5C2' 
    return (
        <>
        <Container justify='center'>
            <Box className="box" direction="row" style={styles.box}>
              <Grid container alignItems='center'>
                  <Grid style={styles.grid1} item lg={1} xl={1}>
                    <img alt="camera"src={camera}/>
                  </Grid>
                  <Grid style={styles.grid2} item lg={6} xl={6}>
                <Typography  style={styles.typo} >
                  Entrar com foto
              </Typography>
                  </Grid>
              </Grid>
            </Box>
            <Paper className="paper" style={styles.paper}>
                <img alt="logo" style={styles.img } src={logo}/>
                <LoginComponent/>
            </Paper>    
        </Container>
        </>
    )
}
export default Login;