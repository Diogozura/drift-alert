import React, { useEffect } from "react";
import Description from "./Description";
import Titulo from "./Titulo";
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton'; // Importa o componente Skeleton

export default function Notification() {
    const [live, setLive] = React.useState(false); // Inicialmente, a transmissão não está ao vivo
    const [title, setTitle] = React.useState('Título');
    const [transmission, setTransmission] = React.useState('Ao vivo');
    const [link, setLink] = React.useState(''); // Novo estado para o link da live
    const [loading, setLoading] = React.useState(true); // Estado para controlar o carregamento

    useEffect(() => {
        const fetchLiveStreamDetails = async () => {
            const API_KEY = 'AIzaSyAivC1f-JOA6xhPb6s8s8gw3vyHsaodlQM'; // Substitua pela sua chave de API
            const CHANNEL_ID = 'UCLA_DiR1FfKNvjuUpBHmylQ'; // Substitua pelo ID do canal da Formula Drift

            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.items.length > 0) {
                    const liveVideo = data.items[0];
                    const liveTitle = liveVideo.snippet.title;
                    const videoId = liveVideo.id.videoId;
                    const liveLink = `https://www.youtube.com/watch?v=${videoId}`; // Gera o link da live
                    
                    setTitle(liveTitle); // Atualiza o título da live
                    setLink(liveLink); // Atualiza o link da live
                    setLive(true); // Define que está ao vivo
                    setTransmission('Ao vivo'); // Você pode modificar isso conforme necessário
                } else {
                    setTransmission('Sem transmissões ao vivo no momento'); // Mensagem alternativa
                }
            } catch (error) {
                console.error("Erro ao obter detalhes da live:", error);
                setTransmission('Erro ao carregar transmissão'); // Mensagem de erro
            } finally {
                setLoading(false); // Define loading como false após a requisição
            }
        };

        fetchLiveStreamDetails(); // Chama a função ao montar o componente
    }, []); // O array vazio garante que o efeito execute apenas uma vez após a montagem

    return (
        <Grid size={12}>
            {loading ? (
                // Mostra o Skeleton enquanto as informações estão sendo carregadas
                <>
                    <Skeleton variant="text" width={210} height={30} />
                    <Skeleton variant="text" width={300} height={20} />
                    <Skeleton variant="rectangular" width={300} height={40} />
                </>
            ) : (
                <>
                    <Titulo live={live} />
                    <Description title={title} transmission={transmission} link={link} live={live} />
                </>
            )}
        </Grid>
    );
}
