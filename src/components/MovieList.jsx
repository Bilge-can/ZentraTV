import React from 'react';
import { FlexboxGrid } from 'rsuite';
import MovieCard from './MovieCard';

export default function MovieList({ movies = [] }) {
    return (
        <FlexboxGrid justify="start" gutter={16}>
            {movies.map(movie => (
                <FlexboxGrid.Item key={movie.id} colspan={6}>
                    <MovieCard movie={movie} />
                </FlexboxGrid.Item>
            ))}
        </FlexboxGrid>
    );
}
