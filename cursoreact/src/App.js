import { useState } from "react";
import "./App.css";
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (event) {
    setLinea1(event.target.value);
  };

  const onChangeLinea2 = function (event) {
    setLinea2(event.target.value);
  };

  const onChangeImagen = function (event) {
    setImagen(event.target.value);
  };

  const onClickExport = function (event) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <div className="memeGenerator">
        <select onChange={onChangeImagen}>
          <option value="fire.jpg">Casa en llamas</option>
          <option value="fry.webp">Futurama</option>
          <option value="aliens.png">History</option>
          <option value="matrix.jpg">Matrix</option>
          <option value="filosoraptor.jpg">Filosoraptor</option>
          <option value="smart.jpg">Smart Guy</option>
        </select>

        <input onChange={onChangeLinea1} type="text" placeholder="linea 1" />

        <input onChange={onChangeLinea2} type="text" placeholder="linea 2" />

        <button onClick={onClickExport}>Export</button>
      </div>

      <div className="memeContainer" id="meme">
        <span className="linea1">{linea1}</span>
        <img className="img" alt="" src={"/img/" + imagen} />
        <span className="linea2">{linea2}</span>
      </div>
    </div>
  );
}

export default App;
