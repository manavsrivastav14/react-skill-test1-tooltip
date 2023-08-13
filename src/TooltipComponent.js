import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { Button } from "react-bootstrap";

function TooltipComponent({ position }) {
  return (
    <>
      <OverlayTrigger
        className="tooltip"
        placement={position}
        overlay={
          <Tooltip id={`tooltip-${position}`}>
            Thanks for Hovering, I am a Tooltip.
          </Tooltip>
        }
      >
        <Button className="hover-button" variant="info">
          Hover on me !!
        </Button>
      </OverlayTrigger>
    </>
  );
}

export default TooltipComponent;
