import { useEffect } from 'react';
import { useState, useCallback, useRef } from 'react';
import { RgbColorPicker } from 'react-colorful';
import useClickOutside from "../hooks/useClickOutside";
import useHueLight from '../hooks/useHueLight';
import './ColorPicker.css';





export default function ColorPicker(props) {
  // const { id, state, lights, setLights } = props;
  const [color, setColor] = useState({ r: 50, g: 100, b: 150 });

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
  }, [color, handleChangeColor]);

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