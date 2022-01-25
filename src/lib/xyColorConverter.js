const ColorConverter = require("cie-rgb-color-converter");

export default function xyColorCoverter (color) {
  let xy = ColorConverter.rgbToXy(color['r'], color['g'], color['b']);
  let parsedXY = {
    xy: [parseFloat((xy.x).toFixed(4)), parseFloat((xy.y).toFixed(4))]
  };
  return parsedXY;
};