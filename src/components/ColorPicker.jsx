import { useEffect } from 'react';
import { useState, useCallback, useRef } from 'react';
import { RgbColorPicker } from 'react-colorful';
import useClickOutside from "../hooks/useClickOutside";
import useHueLight from '../hooks/useHueLight';
import './ColorPicker.css';
const ColorConverter = require("cie-rgb-color-converter");





export default function ColorPicker(props) {
  const { id, state, lights, setLights } = props;
  // console.log(id, "initial xy value", state.xy)
  let rgbState = ColorConverter.xyBriToRgb(state.xy[0], state.xy[1], state.bri)
  // console.log(id, "converted to rgb", rgbState)

  const [color, setColor] = useState(rgbState);

  let xy = ColorConverter.rgbToXy(color['r'], color['g'], color['b']);
  // console.log(id, "rgb converted to xy", xy)

  const {
    handleChangeColor,
  } = useHueLight(props);

  // popover colorpicker
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  useEffect(() => {
    handleChangeColor(color)
  }, [color]);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <RgbColorPicker color={color} onChange={setColor} />
        </div>
      )}
    </div>
  );

}