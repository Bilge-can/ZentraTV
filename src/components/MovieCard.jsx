import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Panel, Button } from 'rsuite';
import { posterUrl } from '../services/tmdbApi';
import PlayOutlineIcon from '@rsuite/icons/PlayOutline';

export default function MovieCard({ movie }) {
    const nav = useNavigate();

    function openPlayer() {
        nav(`/player/${movie.id}`, { state: { movie } });
    }

    return (
        <Panel shaded bordered className="movie-card" style={{ cursor: 'pointer' }}>
            <div className="poster-container" onClick={openPlayer}>
                <img
                    src={posterUrl(movie.poster_path)}
                    alt={movie.title}
                    style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: 6 }}
                />

                <div className="overlay">
                    <Button
                        appearance="primary"
                        color="red"
                        startIcon={<PlayOutlineIcon />}
                        onClick={(e)=>{ e.stopPropagation(); openPlayer(); }}
                    >
                        Oynat
                    </Button>
                </div>
            </div>

            <h5 style={{ marginTop: 10 }}>{movie.title}</h5>
        </Panel>
    );
}
