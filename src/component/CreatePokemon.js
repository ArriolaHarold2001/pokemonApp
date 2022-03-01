import React, { useState } from "react";
import Search from "./component/Search";
import "./index.css";

const CreatePokemon = async () => {
  const [items, addItems] = useState([]);
  const [pokeName, setPokeName] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const data = await res.json();

  addItems(data);
  setIsLoaded(true);

  if (!isLoaded) {
    return (
      <>
        <h1 className="loading">Content Loading...</h1>
        <Search />
      </>
    );
  }

  return (
    <>
      <Search
        onClick={console.log(document.querySelector(".poke-search").value)}
      />
      {console.log(this.state.items)}
      <div className="container">
        <div className="pokemon">
          <h1 className="poke-name">{items.name}</h1>
          <div>
            <img src={items.sprites.front_default} alt="pokemon"></img>
            <img src={items.sprites.back_default} alt="pokemon"></img>
            <img src={items.sprites.front_shiny} alt="pokemon"></img>
            <img src={items.sprites.back_shiny} alt="pokemon"></img>
          </div>
        </div>
        <div className="traits-list">
          <div className="type-ul">
            <h1>Types</h1>
            <ul>
              {items.types.map((type) => (
                <li className="type-items" key={type.slot}>
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="move-ul">
            <h1>Moves</h1>
            <ul>
              {items.moves.map((move) => (
                <li className="move-items" key={move.id}>
                  || {move.move.name} ||
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePokemon;
