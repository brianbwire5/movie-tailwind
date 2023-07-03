import React from "react";
import Link from "next/link";
import Image from "next/image";

function Movie({ title, release_date, id, poster_path }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <h1>{title}</h1>
      <h1>{release_date}</h1>
      <Link href={`/${id}`} legacyBehavior>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={400}
          height={400}
          loading="lazy"
        />
      </Link>
    </div>
  );
}

export default Movie;
