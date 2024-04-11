import NavbarComponent from "@/components/NavbarComponent";
import { format } from "date-fns";
import { getMovieByIdService } from "@/services/movie.service";
import { Rating } from "@mui/material";

const MovieDetail = async ({ params }) => {
  const movieData = await getMovieByIdService(params.movieId);

  const formattedDate = format(
    new Date(movieData.payload?.posted_at),
    "EEEE, MMMM do, yyyy - h:mm a"
  );

  const normalizedRating = movieData.payload.rating * (5 / 10);

  return (
    <div className="bg-[#38140d]">
      <div className="h-screen mb-3">
        <NavbarComponent className="fixed top-0" />
        <div className="bg-[#38140d] py-8">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="w-[70%] px-4">
                <div className="h-[560px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      movieData.payload.image
                        ? movieData.payload.image
                        : "/defualt.jpg"
                    }
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {movieData.payload.movie_title}
                </h2>

                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Released Year:
                  </span>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {movieData.payload.released_year}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Rating:
                  </span>
                  <div className="flex items-center mt-2">
                    <Rating
                      name="read-only"
                      value={normalizedRating}
                      precision={0.5}
                      size="medium"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Post At:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {formattedDate}
                  </p>
                </div>

                <div className="mt-10">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {movieData.payload.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
