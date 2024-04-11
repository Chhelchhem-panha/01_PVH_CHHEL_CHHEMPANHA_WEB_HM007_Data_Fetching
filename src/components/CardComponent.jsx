import Link from "next/link";

const CardComponent = ({ movie }) => {
  return (
    <Link
      className="p-3 w-[270px] h-[290px] bg-white shadow-md flex-shrink-0 rounded-xl hover:shadow-xl flex flex-col items-center"
      href={`/view-movie-details/${movie.movie_id}`}
    >
      <img
        src={movie.image ? movie.image : '/defualt.jpg'}
        className="shadow rounded-lg overflow-hidden border"
      />
      <div className="mt-8" key={movie.movie_id}>
        <h4 className="font-bold text-md line-clamp-1">{movie.movie_title}</h4>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {movie.description}
        </p>
      </div>
    </Link>
  );
};

export default CardComponent;
