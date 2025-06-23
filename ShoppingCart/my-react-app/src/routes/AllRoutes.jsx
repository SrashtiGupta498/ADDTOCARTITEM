import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail } from "../component/Pages";
import { MovieCart } from "../component/Pages/MovieCart";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path=""
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        {/* <Route
         path = "movies/cart"
           element={<MovieCart apiPath="movie/cart" title="CartItem" />}
   /> */}
   <Route path="/cart" element={<MovieCart />} />
      </Routes>
    </div>
  );
};
