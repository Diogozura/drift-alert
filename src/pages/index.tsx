import Head from "next/head";
import Grid from '@mui/material/Grid2';
import {  Container, Typography } from "@mui/material";
import Notification from "@/components/Notification";


export default function Home() {

  return (
    <>
      <Head>
        <title>Drift Alert</title>
        <meta name="description" content="Fique por dentro de todas as emoções com o Drift Alert, seu companheiro definitivo para transmissões ao vivo de drift! Nunca perca um momento, recebendo alertas em tempo real para todas as suas lives favoritas de drift. Seja em competições eletrizantes, corridas casuais ou eventos exclusivos, o Drift Alert garante que você esteja sempre no ritmo certo. Receba notificações instantâneas quando a ação começar e junte-se à comunidade do drift no calor do momento. Sinta a adrenalina, a habilidade e a emoção do drift — ao vivo, enquanto acontece!Fique por dentro de todas as emoções com o Drift Alert, seu companheiro definitivo para transmissões ao vivo de drift! Nunca perca um momento, recebendo alertas em tempo real para todas as suas lives favoritas de drift. Seja em competições eletrizantes, corridas casuais ou eventos exclusivos, o Drift Alert garante que você esteja sempre no ritmo certo. Receba notificações instantâneas quando a ação começar e junte-se à comunidade do drift no calor do momento. Sinta a adrenalina, a habilidade e a emoção do drift — ao vivo, enquanto acontece!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <Container maxWidth="sm">
      <Grid container spacing={2} height={'100vh'} >
        <Grid size={12} display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
        <Typography variant="h3" component={'h1'} textAlign={'center'}>Drift Alert</Typography>
        </Grid> 
        <Notification/>
      </Grid>
      </Container>

      </main>
    
    </>
  );
}
