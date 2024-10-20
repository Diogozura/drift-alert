import React from "react"
import Grid from '@mui/material/Grid2';
import { Typography } from "@mui/material";
import SensorsIcon from '@mui/icons-material/Sensors';

interface TitleDProps {
    live: boolean;
}

export default function Titulo ({live}:TitleDProps){

    return(
        <Grid container bgcolor={live ? "error.main" : "info.main"}  padding={1} borderRadius={'8px'}>
            <Grid size={2}>
            <SensorsIcon fontSize="large"/>
            </Grid>
            <Grid size={8}>
            <Typography variant="h4" component={'h2'} textAlign={'center'}>LIVE {live ? 'ON' : 'OFF'}</Typography> 
            </Grid>   
        </Grid>
    )
}