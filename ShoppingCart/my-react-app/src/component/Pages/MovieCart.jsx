import { useCart, useCartDispatch } from "../../hooks/CartContext.jsx";
import { Button } from "../Button.jsx";
import Backup from "../../assets/images/backup.png"; // Make sure to import the fallback image

export const MovieCart = () => {
  const { items } = useCart();
  const dispatch = useCartDispatch();

  console.log(items, "ITEMS---- DATA");

  if (items.length === 0)
    return <h2 className="text-center mt-10">Your cart is empty.</h2>;

  return (
    <section className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      <ul className="space-y-4">
        {items.map((movie) => {
          const image = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : Backup;

          return (
            <li
              key={movie.id}
              className="flex items-center justify-between bg-slate-50 p-4 rounded"
            >
            
              
    <div className="flex items-center gap-4">
    <img
      className="rounded w-16 h-auto"
      src={image}
      alt={movie.title}
    />
    <span className="font-medium">{movie.title}</span>
    </div>
              <Button className = "mt-2 px-4 py-1 text-sm"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: movie.id })
                }
              >
                Remove
              </Button>
            </li>
          );
        })}
      </ul>

      <Button className="mt-8 w-auto " onClick={() => dispatch({ type: "CLEAR" })}>
        Clear&nbsp;Cart
      </Button>
    </section>
  );
};
