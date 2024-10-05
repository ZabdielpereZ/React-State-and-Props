// src/components/MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    // TODO -- Initialize state with a list of movies ✅
    const [movies, setMovies] = useState(["White Chicks", "Ted", "Step Brothers", "SuperBad", "Rush Hour"])
    const [isMovieDetails, setIsMoviesDetails] = useState(true)

    // TODO -- Implement a delete movie function 
    const [showMovies, setShowMovies] = useState(true);

    // showing movie details
    const handleMovieDetails = () => {
        setIsMoviesDetails(!isMovieDetails)
    }

    return (
        <>
            <h1>Movies List</h1>
            {/*TODO -- Toggle view button */}
            <ul>
                {/* TODO -- Map through the movies and display them ✅*/}
                {movies.map((movie, index) =>
                <li key={index}>{movie}</li>
                )}
            </ul>
                {/*<button onClick={movieDetails}>Show Details</button>*/}
            <h1>Movie Details</h1>
                <p>
                    {isMovieDetails ? 'White Chicks' : "White Chicks: is a 2004 movie about two disgraced FBI agents who go undercover as white women to protect the daughters of a tycoon from kidnapping"}
                </p>
                <p>
                    {isMovieDetails ? 'Ted' : "Ted: is a movie about a young boy who receives a teddy bear as a Christmas present and his wish for the bear to come to life is granted. The two become best friends, but as the boy grows up, their relationship is strained by adulthood and Ted's antics"}
                </p>
                <p>
                    {isMovieDetails ? 'Step Brothers' : "Step Brothers: Brennan Huff and Dale Doback are immature adults still living at home. Brennan lives with his divorced mother, Nancy, and Dale lives with his widowed father, Robert. Robert and Nancy meet, fall in love, and get married, forcing Brennan and Dale to live with each other as step brothers."}
                </p>
                <p>
                    {isMovieDetails ? 'SuperBad' : "SuperBad: High school seniors Seth and Evan have high hopes for a graduation party. The co-dependent teens plan to score booze and babes so they can become part of the in-crowd, but separation anxiety and two bored police officers complicate the pair's self-proclaimed mission."}
                </p>
                <p>
                    {isMovieDetails ? 'Rush Hour' : "Rush Hour: When a Chinese diplomat's daughter is kidnapped in Los Angeles, he calls in Hong Kong Detective Inspector Lee (Jackie Chan) to assist the FBI with the case. But the FBI doesn't want anything to do with Lee, and they dump him off on the LAPD, who assign wisecracking Detective James Carter (Chris Tucker) to watch over him. Although Lee and Carter can't stand each other, they choose to work together to solve the case on their own when they figure out they've been ditched by both the FBI and police. "}
                </p>
                <button onClick={handleMovieDetails}>Movie details</button>
                
        </>
    );
};

export default MoviesList;