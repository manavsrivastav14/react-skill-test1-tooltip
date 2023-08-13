import { useState } from "react";
import TooltipComponent from "./TooltipComponent";
import { Button } from "react-bootstrap";

function App() {
  const [position, setPosition] = useState("left");

  const handleButtonClick = (position) => {
    setPosition(position);
  };

  return (
    <div className="App">
      <TooltipComponent position={position} />
      <div id="button">
        <Button
          className="position-button"
          variant="primary"
          onClick={() => handleButtonClick("left")}
        >
          Left
        </Button>
        <Button
          className="position-button"
          variant="secondary"
          onClick={() => handleButtonClick("top")}
        >
          Top
        </Button>
        <Button
          className="position-button"
          variant="success"
          onClick={() => handleButtonClick("right")}
        >
          Right
        </Button>
        <Button
          className="position-button"
          variant="warning"
          onClick={() => handleButtonClick("bottom")}
        >
          Bottom
        </Button>
      </div>
    </div>
  );
}

export default App;
