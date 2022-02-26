import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/rayquaza`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <h1>Content Loading...</h1>;
    } else {
      return (
        <>
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
    }
  }
}

export default App;
