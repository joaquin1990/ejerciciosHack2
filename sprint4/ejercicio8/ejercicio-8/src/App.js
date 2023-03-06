import Film from "./components/Film";

function App() {
  return (
    <div className="App">
      <div id="film-container">
        <Film id={501} />
        <Film id={502} />
        <Film id={503} />
      </div>
    </div>
  );
}

export default App;
