import { getAllMovieService, getMovieByGenreService } from "@/services/movie.service";
import NavbarComponent from "../components/NavbarComponent";
import CardComponent from "../components/CardComponent";




export default async function Home() {
  const movies = await getAllMovieService();


  const allGenres = movies.payload.map((movie) => movie.genre);
  const uniqueGenres = [...new Set(allGenres)];
  return (
    <div className="bg-[#38140d] pb-10">
      <div className="h-screen mb-3 bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')]">
        <NavbarComponent className="fixed top-0 " />

      </div>

      <div className="container mx-auto">
        <div className="container">
          <h1 className="font-semibold text-xl text-white pt-6">All Movies &gt;</h1>
          <section className="my-6 overflow-x-scroll flex gap-4 lg:grid-cols-4 pl-5 pr-5 no-scrollbar">
            {movies.payload.map((movie) => (
              <CardComponent movie={movie} />
            ))}
          </section>
        </div>

        {
          uniqueGenres.map((genre) => (
            <div className="container" key={genre}>
              <h1 className="font-semibold text-xl text-white pt-6">
                {genre} &gt;
              </h1>
              <section className="my-6 overflow-x-scroll flex gap-4 lg:grid-cols-4 pl-5 pr-5 no-scrollbar">
                {/* {
                getMovieByGenreService(genre).payload.map((movie) => (
                  <h1>{movie.movie_title}</h1>
                ))} */}
              </section>
            </div>
          ))
        }
      </div>
    </div>
  );
}
