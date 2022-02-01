const fakeGroupsState = () => [
  {
    id: "1",
    name: "test group 1",
    lights: ["1"],
    sensors: [],
    type: "Room",
    state: {
      on: false,
      bri: 1,
      hue: 50000,
      sat: 1,
      effect: "colorloop",
      xy: [0.1111, 0.2222],
      ct: 500,
      alert: "select",
      colormode: "hs",
    },
    recycle: false,
    class: "Living room",
    action: {
      all_on: true,
      any_on: true,
    },
  },
  {
    id: "2",
    name: "test group 2",
    lights: ["2"],
    sensors: [],
    type: "Room",
    state: {
      on: true,
      bri: 222,
      hue: 50555,
      sat: 222,
      effect: "colorloop",
      xy: [0.3333, 0.4444],
      ct: 500,
      alert: "select",
      colormode: "hs",
    },
    recycle: false,
    class: "Living room",
    action: {
      all_on: true,
      any_on: true,
    },
  },
];

export { fakeGroupsState };
