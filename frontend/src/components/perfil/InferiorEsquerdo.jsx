import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core/";
import Popover from "@material-ui/core/Popover";
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
export default function InferiorEsquerdo() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Paper
        elevation={3}
        style={{ backgroundColor: "#E2FAEB", height: 320, width: 541 }}
      >
        <Grid style={{ paddingLeft: 44, paddingTop: 47 }} item lg={12} xl={12}>
          <Paper
            style={{ backgroundColor: "#75A99C", height: 60, width: 452 }}
            elevation={3}
          >
            <Typography style={{ ...styles.text, paddingTop: 10 }}>
              Emergência: (71)99999-9999
            </Typography>
          </Paper>
        </Grid>
        <Grid style={{ paddingLeft: 44, paddingTop: 47 }} item lg={12} xl={12}>
          <Paper
            style={{ backgroundColor: "#75A99C", height: 60, width: 452 }}
            elevation={3}
          >
            <Typography
              style={{
                ...styles.text,
                paddingTop: 10,
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              Email
            </Typography>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography style={{ padding: 10 }}>
                fulanodetaldassilva1987@gmail.com
              </Typography>
            </Popover>
          </Paper>
        </Grid>
      </Paper>
    </>
  );
}
