type Unsubscribe = () => void;
export default class EventBus {
    private subscribers;
    private static instance?;
    static getInstance(): EventBus;
    constructor();
    dispatch<T>(event: string, arg?: T): void;
    subscribe(event: string, callback: Function): Unsubscribe;
}
export declare const DispatchEvent: <T>(event: string, arg?: T | undefined) => void;
export declare const SubscribeToEvent: (event: string, callback: Function) => Unsubscribe;
export {};
