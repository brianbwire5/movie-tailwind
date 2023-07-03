import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//getStaticProps
export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const response = await data.json();
  return response.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID", id);

  const imagePath = "https://image.tmdb.org/t/p/original";
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
          { next: { revalidate: 0 } }
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">{movieData.title}</h1>
      <p className="text-md">{movieData.release_date}</p>
      <h2>Runtime: {movieData.runtime} minutes</h2>
      <h2 className="bg-green-600 text-sm text-white inline-block my-2 py-2 px-4 rounded">
        {movieData.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imagePath + movieData.backdrop_path}
        alt={movieData.title}
        width={1000}
        height={1000}
        loading="lazy"
      />
      <p>{movieData.overview}</p>
    </div>
  );
}

export default MovieDetails;
