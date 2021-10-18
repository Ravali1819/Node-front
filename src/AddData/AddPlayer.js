import { useState } from "react";
import { Link } from "react-router-dom";

const AddPlayer = () => {
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [from, setFrom] = useState();
  const [price, setPrice] = useState();
  const [isplaying, setIsPlaying] = useState();
  const [description, setDescription] = useState();

  const codeHandler = (e) => {
    setCode(e.target.value);
  };

  const playerNameHandler = (e) => {
    setName(e.target.value);
  };

  const fromHandler = (e) => {
    setFrom(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const isplayingHandler = (e) => {
    setIsPlaying(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      code,
      name,
      from,
      price,
      isplaying,
      description,
    };

    console.log(newData);

    fetch(process.env.REACT_APP_BACKEND_URL + "add-player", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json();
    });
  };

  return (
    <div>
      <form className="form_data" action="/add-player" method="POST">
        <div className="form_inputs">
          <label htmlFor="code">
            <input
              type="text"
              className="input"
              name="code"
              required
              placeholder="Enter code 345235"
              onChange={codeHandler}
            />
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="playerName">
            <input
              type="text"
              className="input"
              name="playerName"
              required
              placeholder="Enter Player Name"
              onChange={playerNameHandler}
            />
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="from">
            <input
              type="text"
              className="input"
              name="from"
              required
              placeholder="Enter Team Name"
              onChange={fromHandler}
            />
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="price">
            <input
              type="text"
              className="input"
              name="price"
              required
              placeholder="Enter Price"
              onChange={priceHandler}
            />
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="isPlaying">
            <input
              type="text"
              className="input"
              name="isPlaying"
              required
              placeholder="Enter Is Playing"
              onChange={isplayingHandler}
            />
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="description">
            <input
              type="text"
              className="input"
              name="description"
              required
              placeholder="Enter Description"
              onChange={descriptionHandler}
            />
          </label>
        </div>
        <button type="submit" onClick={submitHandler}>
          <Link className="button_link" to="/">
            Add Data
          </Link>
        </button>
      </form>
    </div>
  );
};

export default AddPlayer;
