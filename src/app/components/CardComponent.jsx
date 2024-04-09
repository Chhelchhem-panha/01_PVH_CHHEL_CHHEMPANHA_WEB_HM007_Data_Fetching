import Image from "next/image";

const CardComponent = ({ movie }) => {
  console.log(movie);
  return (
    <a
      className="p-8 max-w-lg border flex-shrink-0 border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
      href="#"
    >
      
      <div className="mt-8"><img
        src={movie.image}
        className=" rounded-lg overflow-hidden border"
      />
        <h4 className="font-bold text-xl">{movie.movie_title}</h4>
        <p className="mt-2 text-gray-600">{movie.description}</p>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
          >
            Start Creating
          </button>
        </div>
      </div>
    </a>
  );
};

export default CardComponent;
