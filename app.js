// GET all movies
const API = "https://movie-api-hhpx.onrender.com/api/movies";

let movies = [];

const filterGrid = document.getElementById("");

const input = document.getElementById("movie-input");

input.addEventListener("input", async (e) => {
  const data = e.target.value;
  const res = await fetch(
    `https://movie-api-hhpx.onrender.com/api/movies/search?q=${data}`,
  );
  console.log(res);

  movies = await res.json();
  render();
});

async function fetchMovies() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("Api Error!");
    movies = await res.json();
    render();
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
}

function render() {
  const grid = document.getElementById("grid");
  grid.innerHTML = movies.map(
    (m) => `
   <div class="movie-card"> 
   <img src=${m.poster} />
   <p>${m.title}</p>
   </div>
  `,
  );
}

fetchMovies();
