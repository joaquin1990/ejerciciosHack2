import Film from "./components/Film";

function App() {
  return (
    <div className="App">
      <div id="film-container">
        <Film name="Spider Man" year="2012" image="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg" rating="No la vi aun" />
        <Film name="Batman" year="1998" image="https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png" rating="Mala" />
        <Film name="Batman y Robin" year="2001" image="https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg" rating="Regular" />
      </div>
    </div>
  );
}

export default App;
