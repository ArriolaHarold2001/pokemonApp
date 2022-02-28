import React, { Component } from "react";
// import Search from "./component/Search";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  //componentUpdate
  async componentDidMount() {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/abra`);
      const data = await res.json();
      this.setState({
        isLoaded: true,
        items: data,
      });
    } catch (err) {
      throw err;
    }
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <h1 className="loading">Content Loading...</h1>;
      // return <Search />;
    } else {
      return (
        <>
          {/* <Search /> */}
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
    }
  }
}

export default App;
