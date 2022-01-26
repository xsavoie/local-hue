import { useState, useCallback, useRef } from "react";
import { RgbColorPicker } from "react-colorful";
import useClickOutside from "../hooks/useClickOutside";
import useHueLight from "../hooks/useHueLight";
import { xyColorCoverter, rgbColorConverter } from "../lib/ColorConverters";
import "./styles/ColorPicker.css";

export default function ColorPicker(props) {
  const { color, setColor, bri } = props;
  const { handleChangeColor } = useHueLight(props);

  const [lastColor, setLastColor] = useState(rgbColorConverter(color, bri));

  const handleChange = (newColor) => {
    const xyColor = xyColorCoverter(newColor);
    console.log("newcolor", newColor);
    setLastColor(newColor);
    setColor(xyColor.xy);
    handleChangeColor(xyColor);
  };

  // popover colorpicker
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{
          backgroundColor: `rgb(${lastColor["r"]}, ${lastColor["g"]}, ${lastColor["b"]})`,
        }}
        onClick={() => toggle(true)}
      />
      {isOpen && (
        <div className="popover" ref={popover}>
          <RgbColorPicker color={lastColor} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}
