import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { Container, Header, Content } from 'rsuite';
import { posterUrl } from '../services/tmdbApi';

export default function PlayerPage() {
    const { state } = useLocation();
    const { id } = useParams();

    const movie = state?.movie ?? { id, title: 'Untitled', poster_path: null };
    const hls = process.env.REACT_APP_SAMPLE_HLS;

    return (
        <Container>
            <Header style={{ padding: 20 }}>
                <h2>{movie.title}</h2>
            </Header>

            <Content style={{ padding: 20 }}>
                <VideoPlayer src={hls} poster={posterUrl(movie.poster_path)} />
            </Content>
        </Container>
    );
}
