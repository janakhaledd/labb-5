import { useState } from 'react';
import './App.css';

function App() {
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState([]);

  function addMovie() {
    if (movieName.trim() === '') {
      return;
    }

    const newMovie = {
      name: movieName,
      review: review,
      rating: rating
    };

    setMovies([...movies, newMovie]);

    setMovieName('');
    setReview('');
    setRating(1);
  }

  function removeMovie(index) {
    const updatedMovies = movies.filter((movie, i) => i !== index);
    setMovies(updatedMovies);
  }

  return (
    <div>
      <h1>My Movie Watch List 🎬</h1>
      <p>Movies I have watched</p>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <textarea
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </select>

      <button onClick={addMovie}>Add Movie</button>

      <h2>My Movies</h2>

      {movies.map((movie, index) => (
        <div className="movie" key={index}>
          <h3>{movie.name}</h3>
          <p>{movie.review}</p>
          <p>{'⭐'.repeat(movie.rating)}</p>

          <button onClick={() => removeMovie(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
