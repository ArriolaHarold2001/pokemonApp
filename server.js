const express = require("express");
const axios = require("axios").default;

const app = express();
app.use(express.json());

const port = 8000;

app.get("/api/:pokemon", async (req, res) => {
  const pokemon = req.params.pokemon;

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  // const movesObjectLength = response.data.moves.length;
  // const randomSelector = Math.floor(Math.random() * movesObjectLength);

  // console.log(response.data);
  // console.log(response.data.types);

  // response.data.types.forEach((e) => {
  //   console.log(e.type.name);
  // });
  // moves: response.data.moves[randomSelector].move.name,

  res.status(200).json({
    name: response.data.name,
    type: response.data.types,
    moves: response.data.moves,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
