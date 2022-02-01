import { fakeGroupsState } from "../lib/testUtils";
import { updateState } from "../lib/updateState.js";

// const mockData = fakeGroupsState();
// console.log(mockData);

describe("update state function", () => {
  it("changes the requested params", () => {
    const mockData = fakeGroupsState();
    const request = { on: true };
    const parsedData = updateState(request, mockData, "1");
    const stateData = parsedData[0].state;
    expect(stateData.on).toBeTruthy();
  });
  it('changes ONLY requested params', () => {
    const mockData = fakeGroupsState();
    const mockState = mockData[0].state;
    const request = { on: true };
    const parsedData = updateState(request, mockData, "1");
    const stateData = parsedData[0].state;
    expect(stateData.on).toBeTruthy();
    expect(stateData.bri).toEqual(mockState.bri);
  })
  it("doesn't mutate the original state", () => {
    const mockData = fakeGroupsState();
    const mockState = mockData[0].state;
    const request = { on: true };
    const parsedData = updateState(request, mockData, "1");
    const stateData = parsedData[0].state;
    expect(stateData.on).toBeTruthy();
    expect(mockState.on).toBeFalsy();

  });
  it('only mutates one group in the groups array', () => {
    const mockData = fakeGroupsState();
    const groupTwoState = mockData[1].state;
    expect(groupTwoState.on).toBeTruthy();
    const request = { on: true };
    const parsedData = updateState(request, mockData, "1");
    const stateData = parsedData[0].state;
    expect(stateData.on).toBeTruthy();
    expect(groupTwoState.on).toBeTruthy();
  })
  // it('changes multiple params with one request', () => {
  //   const request = { on: true, bri: 254, sat: 254 };
  //   const parsedData = updateState(request, mockData, "1");
  //   const stateData = parsedData[0].state;
  //   expect(stateData["on"]).toBeTruthy();
  //   expect(stateData["bri"]).toEqual(254);
  //   expect(stateData["sat"]).toEqual(254);
  // })
});
