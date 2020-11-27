
import React from 'react';
import { Grid, Typography, Menu, MenuItem} from '@material-ui/core/';
import line from "../../src/img/Line.svg"
import usuario from "../../src/img/usuario.svg"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const styles = {
    texto:{
        fontSize:30,
        
    },
    usuario:{
        paddingLeft:34, 
        paddingRight:20, 
        marginTop:10
    },
    gridPai:{
        marginTop:25
    },
    grid:{
        marginTop: 12
    },
    seta:{
        cursor:'pointer', 
        marginTop:10, 
        paddingLeft:17
    }
}
function Header(){

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return(
        <>
        <Grid  style={styles.gridPai}container direction='row' justify='flex-end' alignItems="center" >         
            <Grid  container justify='flex-end' item lg={2} xl={2}>
               <img alt='line' src={line}/>
               <img alt='usuario' style={styles.usuario} src={usuario}/>
            </Grid>
            <Grid style={styles.grid} container item lg={2} xl={1}>
                <Typography style={styles.texto}>
                    Fulano
                </Typography>
                <ArrowDropDownIcon onClick={handleClick} style={styles.seta}/>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Menu</MenuItem>
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                </Menu>
            </Grid>
       </Grid>
        </>
    )
}
export default Header;