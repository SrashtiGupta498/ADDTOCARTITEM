// import { useFetch } from "../../hooks/useFetch.jsx";
// import { useTitle } from "../../hooks/useTitle.jsx";
// import{Card } from "../../component";


// export const MovieList = ({ apiPath , title}) =>{

//     const {data: movies} = useFetch(apiPath);
//     useTitle(title);
//     return(
//         <main>
//             <section className="max-w-7xl mx-auto py-7">
//           <div className="flex justify-start flex-wrap other:justify-evenly">       
//           { movies.map((movie) => (
//             <Card key={movie.id} movie={movie} />
//           )) }          
//         </div>
//             </section>
//         </main>
//     )
// }

// import { useFetch } from "../../hooks/useFetch";
import {useFetch} from "../../hooks/useFetch.jsx";
import { useTitle } from "../../hooks/useTitle.jsx";
import { Card } from "../Card.jsx";
import { Button } from "../Button.jsx"; // your styled button
import { Link } from "react-router-dom";
import { useCart, useCartDispatch } from "../../hooks/CartContext.jsx";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  const { items } = useCart();
  const dispatch = useCartDispatch();

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-6">
          {movies.map((movie) => {
            console.log(movie, "MOVIRRRRRR")
            const inCart = items.some((m) => m.id === movie.id);

            return (
              <div key={movie.id} className="w-56">
                <Card movie={movie} />
                {inCart ? (
                  <Link
                    to="/cart"
                    className="block text-center mt-2 text-white bg-green-600 rounded px-4 py-2"
                  >
                    Go&nbsp;to&nbsp;Cart
                  </Link>
                ) : (
                  <Button
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: movie })
                    }
                  >
                    Add&nbsp;to&nbsp;Cart
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
