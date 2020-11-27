import React , {useState}from "react";
import {
    Grid,
    TextField,
    Box,
    Typography
  } from "@material-ui/core/";
import camera from "../../../src/img/camera.svg"
export default function Emergencia() {
    const [nome, setNome]=useState('');
    const [email, setEmail]=useState('');
    const [relacao, setRelacao]=useState('');
    const [telefone, setTelefone]=useState('');
    const styles={
        textField1:{
            marginLeft: 725, 
            width: "624px" 
        },
        textField2:{
            marginLeft: 725, 
            width: "624px", 
            marginTop: "60px"
        }, 
        typo:{
            fontSize:'18px'
          },
          grid1:{
            marginLeft:'32px',
            marginTop:"10px"
          },
          grid2:{
            marginLeft:'53px',
            marginTop:"10px"
          },
          box: {
            borderRadius:'21px', 
            height:'94px',
            backgroundColor:'#447A76', 
            width:'293px', 
            marginLeft:'720px'
          }
    }
    return(
        <>
            <Grid style={{ paddingTop: 114 }} container justify="center">
                <Grid item lg={12} xl={12}>
                    <TextField
                        onChange={(event) => {
                            setNome(event.target.value);
                        }}
                        label="Nome"
                        variant="outlined"
                        style={styles.textField1}
                    />
                </Grid>
                <Grid item lg={12} xl={12}>
                    <TextField
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        label="Email"
                        variant="outlined"
                        style={styles.textField2}
                    />
                </Grid>
                <Grid item lg={12} xl={12}>
                    <TextField
                        onChange={(event) => {
                            setRelacao(event.target.value);
                        }}
                        label="Relação"
                        variant="outlined"
                        style={styles.textField2}
                    />
                </Grid>
                <Grid item lg={12} xl={12}>
                    <TextField
                        onChange={(event) => {
                            setTelefone(event.target.value);
                        }}
                        label="Telefone"
                        variant="outlined"
                        style={styles.textField2}
                    />
                </Grid>
                <Grid style = {{marginTop:50}}item lg={12} xl={12}>
                <Box className="box" direction="row" style={styles.box}>
                <Grid container alignItems='center'>
                  <Grid style={styles.grid1} item lg={1} xl={1}>
                    <img alt="camera" src={camera}/>
                  </Grid>
                  <Grid style={styles.grid2} item lg={6} xl={6}>
                <Typography  style={styles.typo} >
                  Inserir Foto
              </Typography>
                  </Grid>
              </Grid>
            </Box>

                </Grid>
            </Grid>
        </>
    );
}
