import React , {useState}from "react";
import {
    Grid,
    TextField,
  } from "@material-ui/core/";
const styles={
    textField1:{
        marginLeft: 725, 
        width: "624px"
    },
    textField2:{
        marginLeft: 725, 
        width: "624px", 
        marginTop: "60px"
    }
}
export default function Contato() {
    const [email, setEmail]=useState('');
    const [endereco, setEndereco]=useState('');
    const [religiao, setReligiao]=useState('');
    const [telefone, setTelefone]=useState('');

    return(
        <>
            <Grid style={{ paddingTop: 114 }} container justify="center">
                <Grid item xl={12}>
                    <TextField
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        label="Email"
                        variant="outlined"
                        style={styles.textField1}
                    />
                </Grid>
                <Grid item xl={12}>
                    <TextField
                        onChange={(event) => {
                            setEndereco(event.target.value);
                        }}
                        label="Endereço"
                        variant="outlined"
                        style={styles.textField2}
                    />
                </Grid>
                <Grid item xl={12}>
                    <TextField
                        onChange={(event) => {
                            setReligiao(event.target.value);
                        }}
                        label="Religião"
                        variant="outlined"
                        style={styles.textField2}
                    />
                </Grid>
                <Grid item xl={12}>
                    <TextField
                        onChange={(event) => {
                            setTelefone(event.target.value.replace(/[^0-9]/gi,''));
                        }}
                        label="Telefone"
                        variant="outlined"
                        style={styles.textField2}
                    />
                </Grid>
               
            </Grid>
        </>
    );
}