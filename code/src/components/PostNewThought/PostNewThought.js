import React, { useState } from "react";
import "./PostNewThought.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const PostNewThought = ({ API_URL, onSetThoughtList, thoughtList }) => {
  const [newThought, setNewThought] = useState("");
  console.log(newThought);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => onSetThoughtList([...thoughtList, data]));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="inputThoughts">What makes you happy right now?</label>
      <input
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
        type="text"
        id="inputThoughts"
      ></input>
      <div>
        <button className="submit-button">
          <FontAwesomeIcon icon={faHeart} className="icon__heart--red" />
          Send Happy Thougth
          <FontAwesomeIcon icon={faHeart} className="icon__heart--red" />
        </button>
      </div>
    </form>
  );
};
