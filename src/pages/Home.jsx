import React, { useEffect, useState } from 'react';
import { fetchTrending, fetchTopRated } from '../services/tmdbApi';
import MovieList from '../components/MovieList';
import { Divider, Loader } from 'rsuite';

export default function Home() {
    const [trending, setTrending] = useState(null);
    const [topRated, setTopRated] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setTrending(await fetchTrending());
                setTopRated(await fetchTopRated());
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    if (!trending || !topRated) {
        return <Loader center content="Yükleniyor..." size="lg" />;
    }

    return (
        <div style={{ padding: 20 }}>
            <h3>🔻 Trending</h3>
            <MovieList movies={trending} />

            <Divider />

            <h3>⭐ Top Rated</h3>
            <MovieList movies={topRated} />
        </div>
    );
}
