import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { IconButton, Slider, Loader, ButtonGroup } from "rsuite";

import PlayIcon from "@rsuite/icons/legacy/Play";
import PauseIcon from "@rsuite/icons/legacy/Pause";
import VolumeUpIcon from "@rsuite/icons/legacy/VolumeUp";
import VolumeOffIcon from "@rsuite/icons/legacy/VolumeOff";
import ExpandIcon from "@rsuite/icons/ExpandOutline";
import ArrowLeftIcon from "@rsuite/icons/ArrowLeft";
import ArrowRightIcon from "@rsuite/icons/ArrowRight";

export default function VideoPlayer({ src, poster }) {
    const videoRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => setLoading(false));
        } else {
            video.src = src;
        }

        video.addEventListener("timeupdate", () => setCurrent(video.currentTime));
        video.addEventListener("loadedmetadata", () =>
            setDuration(video.duration)
        );

        return () => {};
    }, [src]);

    function togglePlay() {
        const v = videoRef.current;
        if (v.paused) {
            v.play();
            setPlaying(true);
        } else {
            v.pause();
            setPlaying(false);
        }
    }

    return (
        <div style={{ background: "#000", borderRadius: 12, padding: 10 }}>
            <div style={{ position: "relative" }}>
                {loading && <Loader center content="Yükleniyor..." />}
                <video
                    ref={videoRef}
                    poster={poster}
                    style={{ width: "100%", borderRadius: 8 }}
                    controls={false}
                />
            </div>

            <div style={{ padding: 10 }}>
                <ButtonGroup>
                    <IconButton
                        icon={<ArrowLeftIcon />}
                        onClick={() => (videoRef.current.currentTime -= 10)}
                    />
                    <IconButton
                        icon={playing ? <PauseIcon /> : <PlayIcon />}
                        onClick={togglePlay}
                    />
                    <IconButton
                        icon={<ArrowRightIcon />}
                        onClick={() => (videoRef.current.currentTime += 10)}
                    />
                </ButtonGroup>

                <IconButton
                    icon={muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    onClick={() => {
                        videoRef.current.muted = !muted;
                        setMuted(!muted);
                    }}
                    style={{ marginLeft: 10 }}
                />

                <IconButton
                    icon={<ExpandIcon />}
                    onClick={() => videoRef.current.requestFullscreen()}
                    style={{ marginLeft: 10 }}
                />

                <div style={{ marginTop: 15 }}>
                    <Slider
                        progress
                        max={duration}
                        value={current}
                        onChange={(v) => (videoRef.current.currentTime = v)}
                    />
                </div>
            </div>
        </div>
    );
}
