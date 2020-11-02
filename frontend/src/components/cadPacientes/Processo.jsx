import React from "react";
import { Grid, Paper } from "@material-ui/core/";
const styles={
    azul:{
        borderRadius: 40,
        backgroundColor: "#6CA5C2",
        height: "20px",
        width: "20px",
    },
    cinza:{
        borderRadius: 40,
        backgroundColor: "#C4C4C4",
        height: "20px",
        width: "20px",
    },
    primeiraBola:{
        marginTop: 67
    },
    segundaBola:{
        marginLeft: 102, 
        marginTop: 67 
    }
}
function setColors(value) {
  switch (value) {
    case 0:
      return (
        <Grid container justify="center">
          <Grid style={styles.primeiraBola}>
            <Paper
              style={styles.azul}
            />
          </Grid>
          <Grid style={styles.segundaBola}>
            <Paper
              style={styles.cinza}
            />
          </Grid>
          <Grid style={styles.segundaBola}>
            <Paper
              style={styles.cinza}
            />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container justify="center">
          <Grid style={styles.primeiraBola}>
            <Paper
              style={styles.cinza}
            />
          </Grid>
          <Grid style={styles.segundaBola}>
            <Paper
              style={styles.azul}
            />
          </Grid>
          <Grid style={styles.segundaBola}>
            <Paper
              style={styles.cinza}
            />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container justify="center">
          <Grid style={styles.primeiraBola}>
            <Paper
              style={styles.cinza}
            />
          </Grid>
          <Grid style={styles.segundaBola}>
            <Paper
              style={styles.cinza}
            />
          </Grid>
          <Grid style={styles.segundaBola}>
            <Paper
              style={styles.azul}
            />
          </Grid>
        </Grid>
      );
  }
}
export default function Processo(value) {
  return <>{setColors(value.valor)}</>;
}
