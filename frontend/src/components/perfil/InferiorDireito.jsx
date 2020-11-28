import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core/";
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
export default function InferiorDireito() {
  return (
    <>
      <Grid item lg={12} xl={12}>
        <Paper elevation={3}>
          <Typography style={styles.text}>ANAMNESE</Typography>
        </Paper>
      </Grid>
      <Grid item style={{ marginTop: 42 }} lg={12} xl={12}>
        <Paper elevation={3}>
          <Typography style={styles.text}>INFORMAÇÕES</Typography>
        </Paper>
      </Grid>
      <Grid item style={{ marginTop: 42 }} lg={12} xl={12}>
        <Paper elevation={3}>
          <Typography style={styles.text}>CONTATO</Typography>
        </Paper>
      </Grid>
      <Grid item style={{ marginTop: 42 }} lg={12} xl={12}>
        <Paper elevation={3}>
          <Typography style={styles.text}>CONTATO DE EMERGÊNCIA</Typography>
        </Paper>
      </Grid>
    </>
  );
}
