import axios from 'axios';
import { useEffect } from 'react';
import { useState, useCallback, useRef } from 'react';
import { RgbColorPicker } from 'react-colorful';
import useClickOutside from "../hooks/useClickOutside";
import './ColorPicker.css';

const ColorConverter = require("cie-rgb-color-converter");

const bridge = process.env.REACT_APP_HUE_BRIDGE_IP;
const username = process.env.REACT_APP_HUE_USERNAME;


const changeColor = (lightId, color, lights, setLights) => {
  try {
    return axios.put(`http://${bridge}/api/${username}/lights/${lightId}/state`,
      color
    )
  } catch (err) {
    console.log(err);
  }


}

export default function ColorPicker(props) {
  const { id, state, lights, setLights } = props;
  const [color, setColor] = useState({ r: 50, g: 100, b: 150 })

  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close)


  useEffect(() => {
    let xy = ColorConverter.rgbToXy(color['r'], color['g'], color['b']);
    let parsedXY = {
      xy: [xy.x, xy.y]
    }
    console.log(parsedXY)

    changeColor(id, parsedXY, lights, setLights)
  }, [color])


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