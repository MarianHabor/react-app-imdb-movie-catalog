import React, { useEffect } from "react";

const apiKey = "http://www.omdbapi.com/?apikey=a73c7dc2";

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${apiKey}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return ( 
        <h1>App</h1>
    );
}
 
export default App;