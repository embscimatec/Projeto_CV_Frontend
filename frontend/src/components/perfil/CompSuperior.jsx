import React from "react";
import { Grid, Typography } from "@material-ui/core/";
const styles = {
  text: {
    fontSize: 30,
    backgroundColor: "#75A99C",
    textAlign: "center",
  },
};
export default function CompSuperior() {
  return (
    <>
      <Grid item lg={7} xl={7}>
        <Grid item xl={12}>
          <Typography style={styles.text}>
            FULANO DE TAL DA SILVA SANTOS
          </Typography>
        </Grid>
        <Grid style={{ marginTop: 31 }} item xl={12}>
          <Typography style={styles.text}>CPF: 1234567890</Typography>
        </Grid>
        <Grid style={{ marginTop: 31 }} item xl={12}>
          <Typography style={styles.text}>
            Data de nascimento: 12/2/1987
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
