import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
  // /** hooks to get value from store */
  const store = useSelector((state) => state.country);

  return (
    <div>
      <Link to="/country">
        <button>Select Country</button>
      </Link>

      <h4>Selected Country : {store?.country}</h4>
    </div>
  );
}

export default HomePage;
