import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Link to="/todo" className="btn btn-warning link">
        To Do App
      </Link>
      <Link to="/notes" className="btn btn-warning link">
        Note Keeper
      </Link>
      <Link to="/timer" className="btn btn-warning link">
        Timer
      </Link>
      <Link to="/internet" className="btn btn-warning link">
        Internet
      </Link>
    </div>
  );
}

export default Home;
