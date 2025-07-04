import { Link } from "react-router-dom";

export function MoviesTable({ movies }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, idx) => (
            <tr key={idx}>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
          ))}
        </tbody>
      </table>
      {movies.length === 0 && (
        <div
          class="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          Panašu, jog neturi jokių filmų. Eik ir{" "}
          <Link to="/movies/add" class="alert-link">
            sukurk naują filmą
          </Link>
          .
        </div>
      )}
    </div>
  );
}
