import "./App.css";
import MovieItems from "./components/MovieItems";
import movies from "./movies";

function App() {
  return (
    <div>
      <MovieItems movies={movies} />
    </div>
  );
}

export default App;
