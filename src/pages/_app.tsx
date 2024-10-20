import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import theme from "../styles/theme";
import Script from "next/script";
import Head from "next/head";
import { NextSeo, SocialProfileJsonLd } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name="Diogo zura"
        url="https://www.driftranking.com"
        sameAs={["https://www.instagram.com/driftranking/"]}
      />
      <NextSeo
        additionalMetaTags={[
          {
            property: "Front-end",
            content: "Diogo Zura",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.driftranking.com",
          title: "Drift alerta",
          description:
            "Fique por dentro de todas as emoções com o Drift Alert, seu companheiro definitivo para transmissões ao vivo de drift! Nunca perca um momento, recebendo alertas em tempo real para todas as suas lives favoritas de drift. Seja em competições eletrizantes, corridas casuais ou eventos exclusivos, o Drift Alert garante que você esteja sempre no ritmo certo. Receba notificações instantâneas quando a ação começar e junte-se à comunidade do drift no calor do momento. Sinta a adrenalina, a habilidade e a emoção do drift — ao vivo, enquanto acontece!Fique por dentro de todas as emoções com o Drift Alert, seu companheiro definitivo para transmissões ao vivo de drift! Nunca perca um momento, recebendo alertas em tempo real para todas as suas lives favoritas de drift. Seja em competições eletrizantes, corridas casuais ou eventos exclusivos, o Drift Alert garante que você esteja sempre no ritmo certo. Receba notificações instantâneas quando a ação começar e junte-se à comunidade do drift no calor do momento. Sinta a adrenalina, a habilidade e a emoção do drift — ao vivo, enquanto acontece! ",
          images: [
            {
              url: "https://www.driftranking.com/DriftAlert.png",
              alt: "logo drift alert - drift ranking",
            },
          ],
        }}
      />

      <Head>
        <link rel="canonical" href="https://www.driftranking.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <meta
          name="keywords"
          content="drift, Website"
        />
        <meta name="author" content="Diogo zura" />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CSC03MXDH1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-CSC03MXDH1');
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
