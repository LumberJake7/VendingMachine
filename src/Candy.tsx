import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h2>Candy</h2>
      <p>You have chosen a sweet Candy!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Candy;
