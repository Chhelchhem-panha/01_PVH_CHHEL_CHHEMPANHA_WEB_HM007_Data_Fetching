const CardComponent = ({ movie }) => {
  return (
    <a
      className="p-3 w-[250px] bg-white shadow-md flex-shrink-0 border-indigo-300 rounded-xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
      href="#"
    >
      <img src={movie.image} className="shadow rounded-lg overflow-hidden border" />
      <div className="mt-8">
        <h4 className="font-bold text-xl">{movie.movie_title}</h4>
        <p className="mt-2 text-gray-600 line-clamp-2">{movie.description}</p>
      </div>
    </a>
  );
};

export default CardComponent;
