import React from "react";
import {
  Paper,
  Grid,
  makeStyles,
} from "@material-ui/core/";
import Header from "../components/Header";
import Avatar from "@material-ui/core/Avatar";
import homem from "../../src/img/homem.jpeg";
import CompSuperior from "../components/perfil/CompSuperior";
import InferiorEsquerdo from "../components/perfil/InferiorEsquerdo";
import InferiorDireito from "../components/perfil/InferiorDireito";

import "../Css/Perfil.css";
const useStyles = makeStyles((theme) => ({
  retrato: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    borderRadius: 25,
  },
}));
const styles = {
  paper: {
    borderRadius: "0px 96px 96px 0px",
    width: "1374px",
    marginBottom: "36px",
    height: "949px",
  },
  text: {
    fontSize: 30,
    backgroundColor: "#75A99C",
    textAlign: "center",
  },
};
export default function Perfil() {
  document.body.style = "background: #6CA5C2";
  const classes = useStyles();
  return (
    <>
      <Header />
      <Paper className="fundo" style={styles.paper}>
        <Grid container style={{ marginLeft: 121, marginTop: 58 }}>
          <Grid item lg={3} xl={3}>
            <Avatar src={homem} className={classes.retrato} />
          </Grid>
          <CompSuperior />
        </Grid>
        <Grid container style={{ marginLeft: 73, marginTop: 273 }}>
          <Grid item lg={5} xl={5}>
            <InferiorEsquerdo />
          </Grid>
          <Grid item style={{ marginLeft: 73 }} lg={5} xl={5}>
          <InferiorDireito />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
