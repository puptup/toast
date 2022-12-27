import uniqid from "uniqid";

interface Callable {
  [key: string]: Function;
}

interface Subscriber {
  [key: string]: Callable;
}

type Unsubscribe = () => void;

export default class EventBus {
  private subscribers: Subscriber;
  private static instance?: EventBus = undefined;

  public static getInstance(): EventBus {
    if (!this.instance) {
      this.instance = new EventBus();
    }

    return this.instance;
  }

  constructor() {
    this.subscribers = {};
  }

  public dispatch<T>(event: string, arg?: T): void {
    const subscriber = this.subscribers[event];

    if (subscriber === undefined) {
      return;
    }

    Object.keys(subscriber).forEach((id) => subscriber[id](arg));
  }

  public subscribe(event: string, callback: Function): Unsubscribe {
    const id = uniqid();
    if (!this.subscribers[event]) this.subscribers[event] = {};

    this.subscribers[event][id] = callback;

    return () => {
      delete this.subscribers[event][id];
      if (Object.keys(this.subscribers[event]).length === 0) delete this.subscribers[event];
    };
  }
}

export const DispatchEvent = <T>(event: string, arg?: T): void => {
  EventBus.getInstance().dispatch(event, arg);
};

export const SubscribeToEvent = (event: string, callback: Function): Unsubscribe => {
  return EventBus.getInstance().subscribe(event, callback);
};
