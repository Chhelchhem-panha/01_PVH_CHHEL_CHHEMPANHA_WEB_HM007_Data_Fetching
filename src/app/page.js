
import { getAllMovieService } from "@/services/movie.service";
import NavbarComponent from "./components/NavbarComponent";
import CardComponent from "./components/CardComponent";


export default async function Home() {
  const movies = await getAllMovieService();

  const movieArray = movies.payload;
  console.log("movieArray: ", movieArray)

  return (
    <div className="">
      <div className="h-screen bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')]">
   
        <NavbarComponent className="fixed top-0 w-full py-4" />
      </div>

      {/* Movie Card Scroller (Below the hero) */}
      <section className="container overflow-x-auto mx-auto py-10 lg:grid-cols-4 gap-4 grid">
        <h1>Action Movie</h1>
        {/* ... (Rest of your code) */}
        {movies.payload.map((movie) => (
          <CardComponent movie={movie}/>
      ))}
    
      </section>
    </div>
  );
}
