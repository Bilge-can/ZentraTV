import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Panel, Button } from 'rsuite';
import { posterUrl } from '../services/tmdbApi';
import PlayOutlineIcon from '@rsuite/icons/PlayOutline';
import "../styles/moviecard.css";

export default function MovieCard({ movie }) {
    const nav = useNavigate();

    function openPlayer() {
        nav(`/player/${movie.id}`, { state: { movie } });
    }

    return (
        <Panel shaded bordered className="movie-card" style={{ cursor: 'pointer', background: "transparent",
            boxShadow: "none"}}>
            <div className="poster-container" onClick={openPlayer}>

                {/* POSTER */}
                <img
                    src={posterUrl(movie.poster_path)}
                    alt={movie.title}
                    style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        borderRadius: 6
                    }}
                />

                {/* HOVER OYNAT BUTONU */}
                <div className="overlay">
                    <Button
                        appearance="primary"
                        color="red"
                        startIcon={<PlayOutlineIcon />}
                        onClick={(e) => { e.stopPropagation(); openPlayer(); }}
                    >
                        Oynat
                    </Button>
                </div>

                {/* HOVER DETAY BİLGİ PENCERESİ */}
                <div className="movie-hover">
                    <h4>{movie.title}</h4>
                    <p><strong>Çıkış Tarihi:</strong> {movie.release_date || "Bilinmiyor"}</p>
                    <p><strong>Puan:</strong> ⭐ {movie.vote_average?.toFixed(1)}</p>
                    <p><strong>Oy Sayısı:</strong> {movie.vote_count}</p>
                    <p className="overview">
                        {movie.overview || "Açıklama bulunamadı."}
                    </p>
                </div>

            </div>

            {/* ALT BAŞLIK */}
            <h5 style={{ marginTop: 10, color: "orange" }}>{movie.title}</h5>
        </Panel>
    );
}
