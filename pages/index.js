import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Movie from "./components/Movie";

export default function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const responseData = await data.json();
      setResponse(responseData.results);
    };

    fetchData();
  }, []);

  console.log(response);

  return (
    <main>
      <h1 className="text-center font-bold text-4xl mb-4">
        {" "}
        Brian's Movie Catalogue
      </h1>
      <div className="grid gap-16 grid-cols-fluid">
        {Array.isArray(response) ? (
          response.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
