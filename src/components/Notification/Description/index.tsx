import { Typography } from "@mui/material"
import React from "react"
import Grid from '@mui/material/Grid2';
import SensorsIcon from '@mui/icons-material/Sensors';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";

interface DescriptionProps {
    title: string;
    transmission: string;
    link: string;
    live: boolean;
}

export default function Notification ({title , transmission, link, live }:DescriptionProps){

    return(
        <>
        
        <Grid container bgcolor={'secondary.main'} flexDirection={'column'} mt={1} padding={2} borderRadius={'8px'}>

        <Grid  display={'flex'} mb={2}>
            <SensorsIcon fontSize="large"/>
            <Typography variant="h5" component={'p'} textAlign={'right'}>{transmission}</Typography> 
        </Grid>
        <Grid  display={ live ? 'flex': 'none' } alignItems={'center'}>
            <YouTubeIcon fontSize="large"/>
            <Typography variant="h5" component={'p'} textAlign={'center'}><Link href={link} style={{
                 color :'inherit',
            }}>{title}</Link> </Typography> 
        </Grid>
        </Grid>
       
       
        </>
    )
}