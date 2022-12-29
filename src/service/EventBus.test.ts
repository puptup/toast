import EventBus from "./eventBus";

describe("EventBus", () => {
  it("should be a singleton", () => {
    const one = EventBus.getInstance();
    const two = EventBus.getInstance();
    expect(one).toEqual(two);
  });

  it("subscribe and dispatch work correctly", () => {
    const event = "event";
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    const un1 = EventBus.getInstance().subscribe(event, callback1);
    const un2 = EventBus.getInstance().subscribe(event, callback2);

    EventBus.getInstance().dispatch(event);
    expect(callback1).toBeCalledTimes(1);
    expect(callback2).toBeCalledTimes(1);

    un1();
    un2();

    EventBus.getInstance().dispatch(event);
    expect(callback1).toBeCalledTimes(1);
    expect(callback2).toBeCalledTimes(1);
  });
});
