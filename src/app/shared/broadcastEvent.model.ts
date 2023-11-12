export enum EventKeys {
    LOGGED_IN = "user-logged-in",
}

export interface IBroadcastEvent {
    key: EventKeys;
    data: string;
}