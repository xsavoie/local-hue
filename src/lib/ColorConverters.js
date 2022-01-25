const ColorConverter = require("cie-rgb-color-converter");

export function xyColorCoverter (color) {
  let xy = ColorConverter.rgbToXy(color['r'], color['g'], color['b']);
  let parsedXY = {
    xy: [parseFloat((xy.x).toFixed(4)), parseFloat((xy.y).toFixed(4))]
  };
  return parsedXY;
};

export function rgbColorConverter (colorXY, bri) {
  const rgbColor = ColorConverter.xyBriToRgb(colorXY[0], colorXY[1], bri);
  return rgbColor;
};