import React from "react";
import {
  Grid,
  MenuItem,
  InputLabel,
  Typography,
  TextField,
  Select,
  FormControl,
} from "@material-ui/core/";
let dias = [];
for (let i = 1; i < 32; i++) {
  dias.push(i);
}
let meses = [];
for (let i = 1; i < 13; i++) {
  meses.push(i);
}
let anos = [];
for (let i = 1900; i < 2022; i++) {
  anos.push(i);
}
const styles = {
  nome: {
    marginLeft: 725,
    width: "624px",
  },
  cpf: {
    marginTop: "60px",
    marginLeft: 725,
    width: "624px",
  },
  data: {
    fontSize: "20px",
    marginLeft: 725,
    marginTop: 33,
  },
  dia: {
    marginLeft: 725,
    marginTop: 12,
  },
  diaForm: {
    width: "100px",
  },
  mes: {
    marginLeft: 1,
    marginTop: 12,
  },
  ano: {
    marginLeft: 1,
    marginTop: 12,
  },
  mesForm: {
    width: "100px",
  },
  anoForm: {
    width: "100px",
  },
  genero: {
    marginTop: "60px",
  },
  generoForm: {
    marginLeft: 725,
    width: "624px",
  },
};
export default function DadosPessoais() {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const [dia, setDia] = React.useState("");
  const [mes, setMes] = React.useState("");
  const [ano, setAno] = React.useState("");

  const handleChangeDia = (event) => {
    setDia(event.target.value);
  };
  const handleChangeMes = (event) => {
    setMes(event.target.value);
  };
  const handleChangeAno = (event) => {
    setAno(event.target.value);
  };
  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  };
  return (
    <>
      <Grid style={{ paddingTop: 114 }} container justify="center">
        <Grid item xl={12}>
          <TextField
            onChange={(event) => {
              setNome(event.target.value);
            }}
            style={styles.nome}
            label="Nome"
            variant="outlined"
          />
        </Grid>
        <Grid item xl={12}>
          <TextField
            onChange={(event) => {
              setCpf(event.target.value);
            }}
            style={styles.cpf}
            label="CPF"
            variant="outlined"
          />
        </Grid>
        <Grid item xl={12}>
          <Typography style={styles.data}>Data de Nascimento</Typography>
        </Grid>
        <Grid container>
          <Grid style={styles.dia} item xl={1}>
            <FormControl style={styles.diaForm} variant="outlined">
              <InputLabel>Dia</InputLabel>
              <Select value={dia} onChange={handleChangeDia} label="Dia">
                <MenuItem value=""> Nenhum </MenuItem>
                {dias.map((dia2) => (
                  <MenuItem key={dia2.toString()} value={dia2}>
                    {dia2}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid style={styles.mes} item xl={1}>
            <FormControl style={styles.mesForm} variant="outlined">
              <InputLabel>Mês</InputLabel>
              <Select value={mes} onChange={handleChangeMes} label="Mês">
                <MenuItem value=""> Nenhum </MenuItem>
                {meses.map((mes2) => (
                  <MenuItem key={mes2.toString()} value={mes2}>
                    {mes2}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid style={styles.ano} item xl={1}>
            <FormControl style={styles.anoForm} variant="outlined">
              <InputLabel>Ano</InputLabel>
              <Select value={ano} onChange={handleChangeAno} label="Ano">
                <MenuItem value=""> Nenhum </MenuItem>
                {anos.map((ano2) => (
                  <MenuItem key={ano2.toString()} value={ano2}>
                    {ano2}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid style={styles.genero} item xl={12}>
          <FormControl
            style={styles.generoForm}
            label="Gênero"
            variant="outlined"
          >
            <InputLabel>Gênero</InputLabel>
            <Select value={genero} onChange={handleChangeGenero} label="Gênero">
              <MenuItem value=""> Nenhum </MenuItem>
              <MenuItem value="Masculino"> Masculino </MenuItem>
              <MenuItem value="Feminino"> Feminino </MenuItem>
              <MenuItem value="Outro"> Outro </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
