/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#2E4165",
        '@media (max-width:780px)': { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        '@media (max-width:780px)': { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        '@media (max-width:780px)': { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#5979B3"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(2, 0, 0, 0.87)" className={classes.bar}>   
                <img src="logo.svg" class="logo"/>
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Work
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Commisions 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact  
                </Typography>
                <CustomBtn txt="Trial Our Product"/>
            </Toolbar>
    )
}

export default NavBar