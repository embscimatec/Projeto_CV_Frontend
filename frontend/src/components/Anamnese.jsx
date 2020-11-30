import React, {useState} from 'react';
import { createMuiTheme, withStyles, makeStyles,Select,  MenuItem, ThemeProvider, Grid, Paper, TextField,Typography, Button } from '@material-ui/core/';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { green, purple } from '@material-ui/core/colors';
const perguntas = {
    fumante:{
        pergunta:'Você é fumante?',
        textField: false,
        comboBox:false,
        marcar:true
    },
    cronica:{
        pergunta:'Possui alguma doença crônica?',
        textField: true,
        comboBox:false,
        marcar:true
    },
    bebidas:{
        pergunta:'Você ingere bebidas alcoólicas?',
        textField: false,
        comboBox:false,
        marcar:true
    },
    cirurgia:{
        pergunta:'Já realizou alguma cirurgia?',
        textField: true,
        comboBox:false,
        marcar:true
    },
    disfuncao:{
        pergunta:'Você possui alguma disfunção?',
        textField: true,
        comboBox:false,
        marcar:true
    },
    gravida:{
        pergunta:'Você está grávida?',
        textField: false,
        comboBox:false,
        marcar:true
    },
    filho:{
        pergunta:'Você possui filho(s)?',
        textField: true,
        comboBox:false,
        marcar:true
    },
    medicamento:{
        pergunta:'Você toma algum medicamento contínuamente?',
        textField: true,
        comboBox:false,
        marcar:true
    },
    ist:{
        pergunta:'Você possui alguma IST?',
        textField: true,
        comboBox:false,
        marcar:true
    },
    alergia:{
        pergunta:'Você possui alguma alergia?',
        textField: true,
        comboBox:false,
        marcar:true
    },
    sangue:{
        pergunta:'Qual seu tipo sanguíneo?',
        textField: false,
        comboBox:true,
        marcar:false
    },
    amamentando:{
        pergunta:'Você está amamentando?',
        textField: false,
        comboBox:false,
        marcar:true
    },
    droga:{
        pergunta:'Você usa alguma droga ilícita?',
        textField: true,
        comboBox:false,
        marcar:true
    },
}
const styles={
    text:{
        fontSize:40, 
        textAlign:'center', 
        paddingTop:20
    },
    paper:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'80%', 
        marginBottom:42, 
        height:231
    },
    flex:{
        display:'flex',
        flexDirection:'rows',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30
    },
    ComboBox:{
        width:'80%'
    }
}


export default function Anamnese(props){
    const [colorSim, setColorSim]=useState('#ffffff');
    const [colorNao, setColorNao]=useState('#ffffff');
    const [sangue, setSangue]=useState('');
    const handleChange = (event) => {
        setSangue(event.target.value);
      };
    let anam = Object.entries(perguntas);
            const ColorButton = withStyles((theme) => ({
                root: {
                  color: "#6ED13F",
                  borderColor:"#6ED13F",
                  backgroundColor: colorSim,
                  marginRight:74,
                  width:'150px',
                  '&:hover': {
                      color: "#6ED13F",
                      borderColor:"#6ED13F",
                    },
                },  
              }))(Button);
return(
    <>
    <div style={{marginTop:101}}></div>
    {
        anam.map((perg,index)=>(
            <Paper elevation={5} style={styles.paper}>
                <Typography style={styles.text}>
                    {perg[1].pergunta}
                </Typography>
                {
                    perg[1].marcar == true ? (
                        <>
                        <div style={styles.flex}>
                        <ColorButton onClick={()=>{console.log(index)}}variant="outlined" color="primary" >
                                Sim
                         </ColorButton>
                            <Button style={{width:'150px'}} variant="outlined" color="secondary">
                                Não
                            </Button>
                        </div>
                        </>
                    ):(<></>)
                }
                {
                    perg[1].textField == true ?(
                        <>
                            {perg[1].pergunta=='Você possui filho(s)?'?(
                                <TextField style={{width:'60%', marginBottom:30}} label={'Se sim, quantos?'}/>
                            ):(
                                <TextField style={{width:'60%', marginBottom:30}} label={'Se sim, quais?'}/>
                            )}
                        </>
                    ):(<></>)
                }
                {
                    perg[1].comboBox==true?(
                        <> 
    <FormControl style={styles.ComboBox}>
    <InputLabel >TIPO SANGUÍNEO</InputLabel>
        <Select
          value={sangue}
          onChange={handleChange}
        >
          <MenuItem value={"A+"}>A+</MenuItem>
          <MenuItem value={"A-"}>A-</MenuItem>
          <MenuItem value={"B+"}>B+</MenuItem>
          <MenuItem value={"B-"}>B-</MenuItem>
          <MenuItem value={"AB+"}>AB+</MenuItem>
          <MenuItem value={"AB-"}>AB-</MenuItem>
          <MenuItem value={"O+"}>O+</MenuItem>
          <MenuItem value={"O-"}>O-</MenuItem>
        </Select>
    </FormControl>

                        </>
                    ):
                    (<></>)
                }
            </Paper>
        ))
    }
    </>
)
}