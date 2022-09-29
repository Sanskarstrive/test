import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCountry } from "../store/country";

function Country() {
  const array = ["India", "Australia", "Ghana", "SriLanka", "Nepal"];

  //   ** hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   ** function first set store with the selected value and than redirects to homepage
  function updateState(data) {
    dispatch(setCountry(data));
    navigate("/");
  }

  return (
    <div>
      <ul>
        {array?.map((item, index) => (
          <li
            onClick={() => updateState(item)}
            style={{ cursor: "pointer" }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Country;
