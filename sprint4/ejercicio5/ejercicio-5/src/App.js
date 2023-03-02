import { pokemons } from "./db";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App d-flex flex-wrap">
      {pokemons.map((poke, i) => (
        <Pokemon key={poke.id} title={poke.name} image={poke.image} type={poke.type} />
      ))}
    </div>
  );
}

export default App;
