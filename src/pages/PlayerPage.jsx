import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import "../styles/player.css";
import { useLocation } from "react-router-dom";

export default function PlayerPage() {

    const { state } = useLocation();
    const movie = state?.movie;

    return (
        <div className="player-page">
            <div className="video-wrapper">
                <VideoPlayer
                    src={movie.stream_url || movie.videoUrl}
                    poster={movie.poster_path}
                />
            </div>
        </div>
    );
}
